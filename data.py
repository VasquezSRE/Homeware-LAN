import json
import random
from cryptography.fernet import Fernet


class Data:

    homewareData = {}
    homewareFile = 'homeware.json'
    secureData = {}
    secureFile = 'secure.json'


    def __init__(self):
        try:
            with open(self.homewareFile, 'r') as f:
                self.homewareData = json.load(f)
            #Create the secure file if doesn't exists: v0.3 to v0.4
            try:
                with open(self.secureFile, 'r') as f:
                    self.secureData = json.load(f)
            except:
                with open('config.json', 'r') as f:
                    self.secureData = json.load(f)
                with open('token.json', 'r') as f:
                    self.secureData['token']['google'] = json.load(f)['google']
                with open(self.secureFile, 'w') as f:
                    json.dump(self.secureData, f)
        except:
            print('Hi')

# FILES

    def firstRun(self):
        try:
            with open(self.homewareFile, 'r') as f:
                self.homewareData = json.load(f)
            with open(self.secureFile, 'r') as f:
                self.secureData = json.load(f)
            return False
        except:
            return True

    def save(self):
        with open(self.homewareFile, 'w') as f:
            json.dump(self.homewareData, f)
        with open(self.secureFile, 'w') as f:
            json.dump(self.secureData, f)

    def refresh(self):
        with open(self.homewareFile, 'r') as f:
            self.homewareData = json.load(f)
        with open(self.secureFile, 'r') as f:
            self.secureData = json.load(f)
            
# DEVICES

    def getDevices(self):
        with open(self.homewareFile, 'w') as f:
            json.dump(self.homewareData, f)
        return self.homewareData['devices']

    def updateDevice(self, incommingData):
        deviceID = incommingData['devices']['id']
        temp_devices = [];
        for device in self.homewareData['devices']:
            if device['id'] == deviceID:
                temp_devices.append(incommingData['devices'])
            else:
                temp_devices.append(device)
        self.homewareData['devices'] = temp_devices
        self.save()

    def createDevice(self, incommingData):
        deviceID = incommingData['devices']['id']
        self.homewareData['devices'].append(incommingData['devices'])
        self.homewareData['status'][deviceID] = {}
        self.homewareData['status'][deviceID] = incommingData['status']
        self.save()

    def deleteDevice(self, value):
        temp_devices = [];
        for device in self.homewareData['devices']:
            if device['id'] != value:
                temp_devices.append(device)
        self.homewareData['devices'] = temp_devices
        # Delete status
        status = self.homewareData['status']
        del status[value]
        self.homewareData['status'] = status
        self.save()

# RULES

    def getRules(self):
        with open(self.homewareFile, 'w') as f:
            json.dump(self.homewareData, f)
        return self.homewareData['rules']

    def updateRule(self, incommingData):
        self.homewareData['rules'][int(incommingData['n'])] = incommingData['rule']
        self.save()

    def createRule(self, incommingData):
        self.homewareData['rules'].append(incommingData['rule'])
        self.save()

    def deleteRule(self, value):
        temp_rules = self.homewareData['rules']
        del temp_rules[int(value)]
        self.homewareData['rules'] = temp_rules
        self.save()

# STATUS

    def getStatus(self):
        with open(self.homewareFile, 'w') as f:
            json.dump(self.homewareData, f)
        return self.homewareData['status']

    def updateParamStatus(self, device, param, value):
        self.homewareData['status'][device][param] = value
        self.save()

# SECURE

    def getSecure(self):
        data = {
            "client_id": self.secureData['token']["google"]["client_id"],
            "client_secret": self.secureData['token']["google"]["client_secret"]
        }
        return data

    def updateSecure(self, incommingData):
        self.secureData['token']["google"]["client_id"] = incommingData['client_id']
        self.secureData['token']["google"]["client_secret"] = incommingData['client_secret']
        self.save()

    def getToken(self,agent):
        return self.secureData['token'][agent]

    def updateToken(self,agent,type,value,timestamp):
        self.secureData['token'][agent][type]['value'] = value
        self.secureData['token'][agent][type]['timestamp'] = timestamp
        self.save()

    def setUser(self, value):
        try:
            with open(self.secureFile, 'r') as f:
                self.secureData = json.load(f)
            return 'Your user has beed set in the past'
        except:
            data = {}
            key = Fernet.generate_key()
            self.secureData['key'] = str(key)
            cipher_suite = Fernet(key)
            ciphered_text = cipher_suite.encrypt(str.encode(value.split(':')[1]))   #required to be bytes
            self.secureData['user'] = value.split(':')[0]
            self.secureData['pass'] = str(ciphered_text)
            self.save()
            return 'Saved correctly!'

    def setDomain(self, value):
        self.secureData['domain'] = value
        self.save()

# LOGIN

    def login(self, headers):
        user = headers['user']
        password = headers['pass']

        cipher_suite = Fernet(str.encode(self.secureData['key'][2:len(self.secureData['key'])]))
        plain_text = cipher_suite.decrypt(str.encode(self.secureData['pass'][2:len(self.secureData['pass'])]))
        responseData = {}
        if user == self.secureData['user'] and plain_text == str.encode(password):
            #Generate the token
            chars = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            token = ''
            i = 0
            while i < 40:
                token += random.choice(chars)
                i += 1
            #Saved the new token
            self.secureData['token']['front'] = token
            #Prepare the response
            responseData = {
                'status': 'in',
                'user': user,
                'token': token
            }
        else:
            #Prepare the response
            responseData = {
                'status': 'fail'
            }

        self.save()
        return responseData

    def validateUserToken(self, headers):
        user = headers['user']
        token = headers['token']
        responseData = {}
        if user == self.secureData['user'] and token == self.secureData['token']['front']:
            responseData = {
                'status': 'in'
            }
        else:
            responseData = {
                'status': 'fail'
            }

        return responseData

    def googleSync(self, headers):
        user = headers['user']
        password = headers['pass']

        cipher_suite = Fernet(str.encode(self.secureData['key'][2:len(self.secureData['key'])]))
        plain_text = cipher_suite.decrypt(str.encode(self.secureData['pass'][2:len(self.secureData['pass'])]))
        responseData = {}
        if user == config['user'] and plain_text == str.encode(password):
            return responseURL
        else:
            return "fail"

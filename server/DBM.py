from mongoengine import Document, StringField, IntField, connect, FloatField, DateTimeField, BooleanField, ListField, DictField, NotUniqueError
from datetime import datetime
import json


connect(db="ProfitPath_test", host="mongodb://localhost:27017")

class User(Document):
    name = StringField(required=True)
    email = StringField(required=True,unique=True)
    password = StringField(required=True)
    accountBalance = FloatField()
    birthDate = StringField()
    
    def addUser(d):
        try:
            user = User(**d)
            user.save()
            return("User added successfully!")
        except NotUniqueError:
            return(f"Error: The email '{d['email']}' is already in use.")
        except Exception as ex:
            return(f"An error occurred: {str(ex)}")
    

    '''def editUser(e, d):
        try:
            # Retrieve the user by email
            user = User.objects.get(email=e)  # Use `.get()` to fetch a single user
            
            # Remove empty fields from `d`
            d = {key: value for key, value in d.items() if value != ""}
            
            # Update fields dynamically
            for key, value in d.items():
                if hasattr(user, key):  # Ensure the field exists in the User model
                    setattr(user, key, value)
            
            # Save updated user to the database
            user.save()
            return "User updated successfully!"
        except User.DoesNotExist:
            return f"Error: No user found with email '{e}'."
        except Exception as ex:
            return f"An error occurred: {str(ex)}"
    '''
    
    def userConnect(p,e):#p,e strings
        users = User.objects(email=e,password=p)
        users = json.loads(users.to_json())
        if users!=[]:
            return(True)
        else:
            return(False)
    
    def getUser(e):
        user=User.objects(email=e)
        return(user.to_json())
    
    def getUserID(e):
        userID=User.objects(email=e).get().id
        return(str(userID))


        
'''class Admin(Document):
    name = StringField(required=True)
    password = StringField(required=True)
    email = StringField(required=True)
    birthDate = DateTimeField()'''




class Transactions(Document):
    userID=StringField(required=True)
    transactionType = BooleanField(default=False , required=True)# 0->expences 1->incums
    transactionCategory = StringField(required=True)
    note=StringField()
    amount = FloatField()
    date = StringField()
    time = StringField()
    
    def addTransactions(d):
        try:
            trans = Transactions(**d)
            trans.save()
            return("Transaction added successfully!")
        except Exception as ex:
            return(f"An error occurred: {str(ex)}")
    
    def getTransactions(ID,t):
        #transs=Transactions.objects(transactionType=t).first(n)
        transs=Transactions.objects(userID=ID,transactionType=t)
        return(transs.to_json())
        #{"_id": {"$oid": "674ba6f4426f9e197666e7ab"}, "transactionType": false, "transactionCategory": "food", "amount": 50.0, "date_time": {"$date": 1036540800000}}



class Savings(Document):
    userID=StringField(required=True)
    targetAmount = FloatField()
    currentAmount = FloatField()
    goalDate = StringField()
    history = ListField(DictField())
    note=StringField()
    
    def addSavings(d):
        try:
            savings=Savings(**d)
            savings.save()
            return("Savings added successfully!")
        except Exception as ex:
            return(f"An error occurred: {str(ex)}")
    
    def getSavings(ID):
        savings=Savings.objects(userID=ID)
        return(savings.to_json())



class Investments(Document):
    userID=StringField(required=True)
    investmentType = StringField()
    investmentDate = StringField()
    amountInvested = FloatField()
    stockID = IntField()
    note=StringField()
    
    def addInvestments(d):
        try:
            investment = Investments(**d)
            investment.save()
            return("Investment added successfully!")
        except Exception as ex:
            return(f"An error occurred: {str(ex)}")
    
    def getInvestments(ID):
        investments=Investments.objects(userID=ID)
        return(investments.to_json())
    


#test User
'''d={"name":"aaa","email":"a@a5.c","password":"p1","accountBalance":50,"birthDate":"2002-12-03"}
print(User.addUser(d))
#print(User.editUser("a@a3.c",{"name":"bbb","password":"p2"}))
print(User.getUser("a@a3.c"))
print(User.userConnect("p1","a@a10.c"))'''

#Transactions
#trans=Transactions(0,"food",52,datetime(2002,11,5,0,0,0))
'''d={'userID':'674b9dca1fa19aad765ff096','transactionType':0,'transactionCategory':'food','amount':50,'date':'2024-05-24','time':'12:30:35','note':'testtest'}
Transactions.addTransactions(d)
print(Transactions.getTransactions('674b9dca1fa19aad765ff096',False))'''

#Savings
'''d={'userID':'674b9dca1fa19aad765ff096','note':'testtest','targetAmount':5000,'currentAmount':40,'goalDate':"2002-11-25",'history':[{"date":"2002-11-20","amount":2},{"date":"2002-11-20","amount":5}]}
Savings.addSavings(d)
print(Savings.getSavings('674b9dca1fa19aad765ff096'))'''

#Investments
'''d={'userID':'674b9dca1fa19aad765ff096','note':'testtest','investmentType':'crypto','amountInvested':400,'stockID':5487,'investmentDate':'2002-11-22'}#datetime(2002,11,20,0,0,0)='2002-11-20'
Investments.addInvestments(d)
print(Investments.getInvestments('674b9dca1fa19aad765ff096'))'''

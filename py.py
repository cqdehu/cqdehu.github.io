class IDCard:
    def __init__(self,keresztnev,vezeteknev,elet_kor):
        self.keresztnev = keresztnev
        self.vezeteknev = vezeteknev
        self.elet_kor = int(elet_kor)
        
    def getKeresztnev(self):
        print(self.keresztnev)
        
    def getVezeteknev(self):
        print(self.vezeteknev)
             
             
IDs=[]

f = open("data.txt","r",encoding="UTF-8")
for sor in f:
    ssor = sor.strip()
    stsor = ssor.split(";") 
    keresztnev = stsor[0]
    vezeteknev = stsor[1]
    elet_kor = stsor[2]
    ID = IDCard(keresztnev,vezeteknev,elet_kor)
    IDs.append(ID)
f.close()


cf = open("IDs.txt","w",encoding="UTF8")

cf.close()
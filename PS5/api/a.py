import pandas as pd 
from datetime import date,timedelta
import statsmodels.api as sm


def predict(retailer_id,product,start_date,end_date,sale_type):
    df = ratio_distribution = quantity = None
    if sale_type=="secondary":
        # C:\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api
        df = pd.read_csv(r'\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\received_quantity_df.csv')
        quantity = "received_quantity"
    else:
        df = pd.read_csv(r"\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\sold_quantity_df.csv")
        quantity = "sold_quantity"

    #print(df)

    # r'\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\rs_mop.csv'

    df["to_date"] = pd.to_datetime(df.to_date)
    df.index = df.to_date
    df.drop(columns=["to_date"],inplace=True)
    
    if product == "MOP":
        ratio_distribution = pd.read_csv(r"\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\rs_mop.csv")
    else:
        ratio_distribution = pd.read_csv(r"\Users\Rajat\Desktop\spit_hack\Kepler-452b\PS5\api\rs_dap.csv")

    
    
    fit1 = sm.tsa.statespace.SARIMAX(df[quantity], order=(1, 1, 1),seasonal_order=(0,1,1,7)).fit() 
    
    ## CONVERT THE DATE TO YY-MM-DD format and then calculate the index based on start date an
    ## WE have total index till 345 i.e total number of observations 2020-12-31 (345) 
    
    start_index = (start_date-date(2020,12,31)).days+345
    end_index = (end_date-date(2020,12,31)).days+345
    
    dt=start_date
    date_list = []
    delta=timedelta(days=1)
    while(dt!=end_date):
        date_list.append(dt)
        dt+=delta
        
    date_list.append(dt)
    print(start_index,end_index)
    
    forecast = fit1.predict(start=start_index, end=end_index, dynamic=True) 
    # d=dict()
    # d['points']=[]
    d=[]
    ind=0
    for i in forecast.values:
        d.append({'x':str(date_list[ind].year)+'-'+
            str(date_list[ind].month)+'-'+str(date_list[ind].day),
                'y':str(i) })
        # d['points'].append((,i) )
        ind+=1
    

    # print(forecast.values.sum()/(end_index-start_index))
    ## Calclating Final stock holding till the period
    print("\n\n\n\n\n\n")
    print(retailer_id,ratio_distribution[ratio_distribution["retailer_id"] == retailer_id])
    print("\n\n\n\n\n\n")
    stock_holding = (forecast * ratio_distribution[ratio_distribution["retailer_id"] == retailer_id]["rq_ratio"].values[0])
    # d['holding']=stock_holding.values.sum()
    # print(stock_holding.values.sum())
    # if d['holding']==0:
        # d['holding']=forecast.values.sum()/(1000*(end_index-start_index))
    return d

# predict(295565,'MOP',date(2021,1,1),date(2021,2,5),'secondary')


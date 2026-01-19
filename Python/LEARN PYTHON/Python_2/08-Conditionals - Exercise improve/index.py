# def num_days(month):
#     # if month == 'jan' or month == 'mar' or month == 'may' or month == 'jul' or month == 'aug' or month == 'oct' or month == 'dec':
#     if month in ['jan', 'mar', 'may', 'jul', 'aug', 'oct', 'dec']:
#         print('number of days in',month,'is',31)
#     elif month == 'feb':
#         print('number of days in',month,'is',28)
#     elif month in ['apr', 'jun', 'sep', 'nov']:
#         print('number of days in',month,'is',30)
#     else:
#         print('Invalid input!')


def num_days(month):
    days = 31
    #if month == 'apr' or month =='jun' or month =='sep' or month =='nov':
    if month in ['apr', 'jun', 'sep', 'nov']:
        days = 30
    elif month == 'feb':
        days = 28
    print('number of days in',month,'is',days)


num_days('jan')
# optimize/shorten the code in the function
# try to reduce the number of conditionals 

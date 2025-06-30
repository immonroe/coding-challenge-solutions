# Your function takes two arguments:

# current father's age (years)
# current age of his son (years)
# Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
# The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

def twice_as_old(dad_years_old, son_years_old):
    double = son_years_old * 2
    
    if double >= dad_years_old:
        return double - dad_years_old
    elif double <= dad_years_old:
        return dad_years_old - double
# Build Tower

# Build Tower
# Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

# For example, a tower with 3 floors looks like this:

# [
#   "  *  ",
#   " *** ", 
#   "*****"
# ]
# And a tower with 6 floors looks like this:

# [
#   "     *     ", 
#   "    ***    ", 
#   "   *****   ", 
#   "  *******  ", 
#   " ********* ", 
#   "***********"
# ]


def tower_builder(n_floors):
    tower = []
    
    for i in range(1, n_floors + 1):
        space = ' ' * (n_floors - i)
        star =  '*' * ((2 * i) - 1)
        tower.append(f'{space}{star}{space}')
    return tower

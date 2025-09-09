# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

def solution(s):
    arr = list(s)
    for i,char in enumerate(arr):
        if arr[i] == arr[i].upper:
            arr[i] = f" {arr[i]}"
    return ''.join(arr)
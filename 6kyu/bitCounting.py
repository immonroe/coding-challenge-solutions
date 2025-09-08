# Bit Counting

# Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

# Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

def count_bits(n):
    count = 0
    bit = bin(n)[:2]
    arr = [int(i) for i in str(bit)]

    for i in arr:
        if i == 1:
            count += 1
    return count
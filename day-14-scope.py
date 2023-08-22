class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        abs_values = []

        for a in self.__elements:
            for bi in range(len(self.__elements)):
                b = self.__elements[bi]

                abs_values.append(abs(a - b))

        abs_values.sort()

        self.maximumDifference = abs_values[-1]

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)

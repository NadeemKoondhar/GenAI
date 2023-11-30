def create_csv():
    with open("three_by_3.csv", "w", newline="") as f:
        data_handle = cvs.writer(f, delimiter=",")
        data_handle.writerow(["Name", "Age", "Gender"])
        data_handle.writerow(["Nadeem", "38", "Male"])
        data_handle.writerow(["Saima", "38", "Fe-male"])
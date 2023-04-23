import matplotlib.pyplot as plt
import pandas as pd

def plot_graph():
    plt.style.use('bmh')
    df = pd.read_csv(r"csv-dataset\output.csv")

    tot_list = df['object_track_no'].tolist()
    n1 = tot_list[0]
    n2 = tot_list[-1]

    for i in range(n1, n2+1):
        specified = df.loc[df['object_track_no'] == i]
        if(len(specified) == 0):
            continue
        x = specified['frame_no']
        y = specified['speed']
        print(y)
        fig = plt.figure()
        plt.xlabel('Frame No')
        plt.ylabel('Speed')
        plt.title('Object Track No: {}'.format(i))
        plt.plot(x, y)
        plt.savefig(r"graphs\{}.png".format(i))
        plt.close(fig)


from icrawler.builtin import BingImageCrawler  
import os


def negative_image_generator(object,num,img_location):
    dir = img_location
    parent_dir = "C:/Users/kanda/Desktop/SE_dataset/"
    path = os.path.join(parent_dir, dir)
    os.mkdir(path)
    new_path = os.path.join(path, "n")
    os.mkdir(new_path)

    classes=object.split(',')
    number=num
    for c in classes:
        bing_crawler=BingImageCrawler(storage={'root_dir': fr'C:\Users\kanda\Desktop\SE_dataset\{img_location}\n'})
        bing_crawler.crawl(keyword=c,filters=None,max_num=number,offset=0)            

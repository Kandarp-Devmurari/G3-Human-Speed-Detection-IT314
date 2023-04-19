from icrawler.builtin import BingImageCrawler

classes=['tennis ball on ground'] 
number=100
for c in classes:
    bing_crawler=BingImageCrawler(storage={'root_dir': r'C:\Users\kanda\Desktop\SE_dataset\ball-dataset\p'})
    bing_crawler.crawl(keyword=c,filters=None,max_num=number,offset=0)

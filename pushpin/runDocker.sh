#!/bin/bash

sudo docker stop ctn_neurone_pushpin
sudo docker rm ctn_neurone_pushpin


sudo docker run   --network=host -p 7999:7999 -p 5561:5561 -v $(pwd)/pushpin:/etc/pushpin   --name ctn_neurone_pushpin -d fanout/pushpin
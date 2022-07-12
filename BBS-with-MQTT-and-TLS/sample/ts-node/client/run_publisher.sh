#!/bin/bash



cd ..

for i in {1..10}
do
    echo "Execution $i/10"
    sleep 2
    yarn publisher-and-server

done
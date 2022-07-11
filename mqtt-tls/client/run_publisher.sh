#!/bin/bash




for i in {1..500}
do
    echo "Execution $i/500"
    sleep 1
    node publisher.js

done
#!/bin/bash

echo $FLAG > /var/www/flag

export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh

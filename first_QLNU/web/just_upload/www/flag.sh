#!/bin/bash
sed -i "s/QLNU{qlnu_dadie}/$FLAG/" /var/www/html/flag.php
export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh

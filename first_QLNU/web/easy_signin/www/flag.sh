#!/bin/bash
tmp1=$(echo -n $FLAG | base64 |iconv -t ucs-2be|xxd -c 114 -p -s 0|sed -E 's/.{4}/\\\\u&/g')
sed -i "s/QLNU{really_fakeflag?}/$tmp1/" /var/www/html/js/main.js
export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh

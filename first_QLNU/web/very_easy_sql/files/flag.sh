#!/bin/bash

# 修改数据库中的 FLAG
sed -i "s/GXY{y0u_4re_not_aDmin!}/$FLAG/" /var/www/html/flag.php

export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh

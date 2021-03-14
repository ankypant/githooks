#!/bin/bash
git diff --cached --name-only | while read FILE; do
if [[ "$FILE" =~ ^.+(js|ts)$ ]]; then
	echo -e "FILE NAME $FILE"
    RESULT=$(grep "COMPANY_SECRET" "$FILE")
    if [ ! -z "$RESULT" ]; then
      echo -e "Aborting the commit as COMPANY_SECRET is found in the commit" >&2
      exit 1
    fi
fi
done
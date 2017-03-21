#!/bin/bash

function centerIt {
    lines=$(tput lines);cols=$(tput cols);tput cup $((lines/2)) $(((cols-${#1})/2))
}

function centerPrintIt {
    centerIt "$1"
    printf "$1"
}

clear
centerPrintIt '_____Auto commiting to github script; autocommits pwd_____\n\n'
sleep 2; tput clear

printf 'Fetching and Pulling... \nFetch:\n';git fetch
printf '\nPulling:\n';git pull

printf '%b\n' 'GitHub Auto Commit from pwd:' '\033[95m' $(pwd) '\033[0m'
git add .

printf 'Message to commit with: \n'
read commitMessage

clear
printf "Commit with this message?"
printf "\n\033[95m$commitMessage\033[0m\n"

read -n1 -p '(y/n)' messageConfirmation

if ( [[ "$messageConfirmation" = 'y' ]] );then
    git commit -m "$commitMessage"
    git push
    printf 'Success!?'
else
    printf 'Conformation Failed, Exiting \n'   
fi

printf '\033[93m Have a Nice Day! \033[0m \n'

exit 1
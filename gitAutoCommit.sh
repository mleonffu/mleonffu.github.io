#!/bin/bash

clear
printf 'Auto commiting to github script; autocommits pwd\n\n'

printf '%b\n' 'GitHub Auto Commit from pwd:' '\033[95m' $(pwd) '\033[0m'
git add .

printf 'Message to commit with: \n'
read commitMessage

printf '%b' '\nIs this your message:\n' '\033[95m' "$commitMessage" '\n'
read -n1 -p '(y/n)' messageConfirmation
printf '\n'

if ( [[ "$messageConfirmation" = 'y' ]] );then
    git commit -m "$commitMessage"
    git push
fi
printf 'Conformation Failed, Exiting \n'

printf '\033[93m Have a Nice Day! \033[0m \n'


@echo off
cd C:\Program Files\BlueStacks_nxt
echo Starting Random Dice (com.percent.royaldice) on BlueStacks...
start HD-Player.exe --instance Pie64 --cmd launchApp --package "com.percent.royaldice" --source desktop_shortcut
echo Launched.
echo Starting Discord RPC...
cd C:\Users\NotLeonid\Desktop\nodejs\rpc-randomdice
node index.js
echo Stopped.
pause
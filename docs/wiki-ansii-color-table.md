The chart below shows a few examples of how classical standards and modern [[terminal emulator]]s translate the 4-bit color codes into 24-bit color codes.

<div style="display: flex; width: 100%; overflow-x: auto">
{| class="wikitable"
|-
! {{abbr|FG|Foreground}}
! {{abbr|BG|Background}}
! Name
! [[Color_Graphics_Adapter#With_an_RGBI_monitor|CGA/EGA/VGA]]
! [[Windows Console]]{{ efn | Seen in DOS shell window (non-fullscreen) running in Windows 3.x all the way up to cmd.exe in Windows 8.1 }}
! [[Windows PowerShell|Windows<br/>PowerShell&<br/>1.0–6.0]]{{ efn | PowerShell's default shortcut [[.lnk]], unchanged for over a decade, remaps yellow and magenta to give PowerShell distinctive foreground/background colors compared to the Command Prompt.<ref>{{Cite web |title=default shortcut on Windows remaps ANSI colors 35,36 · Issue #4266 · PowerShell/PowerShell |url=https://github.com/PowerShell/PowerShell/issues/4266 |access-date=2022-12-21 |website=GitHub |language=en}}</ref> PowerShell&nbsp;7 is unaffected.}}
! [[Visual Studio Code]]{{efn|Debug console, "Dark+" theme}}
! [[Windows Console|Windows&nbsp;10<br/>Console]]{{efn | Campbell theme, used as of Windows 10 version 1709.}}
! [[Terminal (macOS)|Terminal.app]]
! [[PuTTY]]
! [[mIRC]]
! [[xterm]]
! [[Ubuntu (operating system)|Ubuntu]]{{efn | For virtual terminals, from /etc/vtrgb.}}
!Eclipse Terminal
|-
| {{tt|30}} || {{tt|40}} || Black
| colspan="4" style="background: #000; color: white" | 0,{{nnbsp}}0,{{nnbsp}}0
| style="background: #0c0c0c; color: white" | 12,{{nnbsp}}12,{{nnbsp}}12
| colspan="4" style="background: #000; color: white" | 0,{{nnbsp}}0,{{nnbsp}}0
| style="background: #010101; color: white" | 1,{{nnbsp}}1,{{nnbsp}}1
| style="background: #000; color: white" | 0,{{nnbsp}}0,{{nnbsp}}0
|-
| {{tt|31}} || {{tt|41}} || Red
| style="background: #AA0000; color: white" | 170,{{nnbsp}}0,{{nnbsp}}0
| colspan="2" style="background: #800000; color: white" | 128,{{nnbsp}}0,{{nnbsp}}0
| style="background: #cd3131; color: white" | 205, 49, 49
| style="background: #c50f1f; color: white" | 197,{{nnbsp}}15,{{nnbsp}}31
| style="background: #990000; color: white" | 153,{{nnbsp}}0,{{nnbsp}}0
| style="background: #bb0000; color: white" | 187,{{nnbsp}}0,{{nnbsp}}0
| style="background: #7f0000; color: white" | 127,{{nnbsp}}0,{{nnbsp}}0
| style="background: #cd0000; color: white" | 205,{{nnbsp}}0,{{nnbsp}}0
| style="background: #de382b; color: white" | 222,{{nnbsp}}56,{{nnbsp}}43
| style="background: #cd0000; color: white" | 205,{{nnbsp}}0,{{nnbsp}}0
|-
| {{tt|32}} || {{tt|42}} || Green
| style="background: #00AA00; color: white" | 0,{{nnbsp}}170,{{nnbsp}}0
| colspan="2" style="background: #008000; color: white" | 0,{{nnbsp}}128,{{nnbsp}}0
| style="background: #0dbc79; color: white" | 13, 188, 121
| style="background: #13a10e; color: white" | 19,{{nnbsp}}161,{{nnbsp}}14
| style="background: #00A600; color: white" | 0,{{nnbsp}}166,{{nnbsp}}0
| style="background: #00bb00; color: white" | 0,{{nnbsp}}187,{{nnbsp}}0
| style="background: #009300; color: white" | 0,{{nnbsp}}147,{{nnbsp}}0
| style="background: #00cd00; color: white" | 0,{{nnbsp}}205,{{nnbsp}}0
| style="background: #39b54a; color: black" | 57,{{nnbsp}}181,{{nnbsp}}74
| style="background: #00cd00; color: white" | 0,{{nnbsp}}205,{{nnbsp}}0
|-
| {{tt|33}} || {{tt|43}} || Yellow
| style="background: #AA5500; color: white" | 170,{{nnbsp}}85,{{nnbsp}}0
| style="background: #808000; color: white" | 128,{{nnbsp}}128,{{nnbsp}}0
| style="background: #eeedf0; color: black" | 238,{{nnbsp}}237,{{nnbsp}}240
| style="background: #e5e510; color: black" | 229, 229, 16
| style="background: #c19c00; color: white" | 193,{{nnbsp}}156,{{nnbsp}}0
| style="background: #999900; color: white" | 153,{{nnbsp}}153,{{nnbsp}}0
| style="background: #bbbb00; color: black" | 187,{{nnbsp}}187,{{nnbsp}}0
| style="background: #fc7f00; color: white" | 252,{{nnbsp}}127,{{nnbsp}}0
| style="background: #cdcd00; color: black" | 205,{{nnbsp}}205,{{nnbsp}}0
| style="background: #ffc706; color: black" | 255,{{nnbsp}}199,{{nnbsp}}6
| style="background: #cdcd00; color: black" | 205,{{nnbsp}}205,{{nnbsp}}0
|-
| {{tt|34}} || {{tt|44}} || Blue
| style="background: #0000AA; color: white" | 0,{{nnbsp}}0,{{nnbsp}}170
| colspan="2" style="background: #000080; color: white" | 0,{{nnbsp}}0,{{nnbsp}}128
| style="background: #2472c8; color: white" | 36, 114, 200
| style="background: #0037da; color: white" | 0,{{nnbsp}}55,{{nnbsp}}218
| style="background: #0000B2; color: white" | 0,{{nnbsp}}0,{{nnbsp}}178
| style="background: #0000bb; color: white" | 0,{{nnbsp}}0,{{nnbsp}}187
| style="background: #00007f; color: white" | 0,{{nnbsp}}0,{{nnbsp}}127
| style="background: #0000ee; color: white" | 0,{{nnbsp}}0,{{nnbsp}}238<ref>Changed from 0,{{nnbsp}}0,{{nnbsp}}205 in July 2004 {{cite web |url=http://invisible-island.net/xterm/xterm.log.html#xterm_192 |title=Patch #192 – 2004/7/12 – XFree86 4.4.99.9}}</ref>
| style="background: #006fb8; color: white" | 0,{{nnbsp}}111,{{nnbsp}}184
| style="background: #0000ee; color: white" | 0,{{nnbsp}}0,{{nnbsp}}238
|-
| {{tt|35}} || {{tt|45}} || Magenta
| style="background: #AA00AA; color: white" | 170,{{nnbsp}}0,{{nnbsp}}170
| style="background: #800080; color: white" | 128,{{nnbsp}}0,{{nnbsp}}128
| style="background: #012456; color: white" | 1,{{nnbsp}}36,{{nnbsp}}86
| style="background: #bc3fbc; color: white" | 188, 63, 188
| style="background: #881798; color: white" | 136,{{nnbsp}}23,{{nnbsp}}152
| style="background: #B200B2; color: white" | 178,{{nnbsp}}0,{{nnbsp}}178
| style="background: #bb00bb; color: white" | 187,{{nnbsp}}0,{{nnbsp}}187
| style="background: #9c009c; color: white" | 156,{{nnbsp}}0,{{nnbsp}}156
| style="background: #cd00cd; color: white" | 205,{{nnbsp}}0,{{nnbsp}}205
| style="background: #762671; color: white" | 118,{{nnbsp}}38,{{nnbsp}}113
| style="background: #cd00cd; color: white" | 205,{{nnbsp}}0,{{nnbsp}}205
|-
| {{tt|36}} || {{tt|46}} || Cyan
| style="background: #00AAAA; color: white" | 0,{{nnbsp}}170,{{nnbsp}}170
| colspan="2" style="background: #008080; color: white" | 0,{{nnbsp}}128,{{nnbsp}}128
| style="background: #11a8cd; color: white" | 17, 168, 205
| style="background: #3a96dd; color: white" | 58,{{nnbsp}}150,{{nnbsp}}221
| style="background: #00A6B2; color: white" | 0,{{nnbsp}}166,{{nnbsp}}178
| style="background: #00bbbb; color: black" | 0,{{nnbsp}}187,{{nnbsp}}187
| style="background: #009393; color: white" | 0,{{nnbsp}}147,{{nnbsp}}147
| style="background: #00cdcd; color: black" | 0,{{nnbsp}}205,{{nnbsp}}205
| style="background: #2cb5e9; color: black" | 44,{{nnbsp}}181,{{nnbsp}}233
| style="background: #00cdcd; color: black" | 0,{{nnbsp}}205,{{nnbsp}}205
|-
| {{tt|37}} || {{tt|47}} || White
| style="background: #AAAAAA; color: black" | 170,{{nnbsp}}170,{{nnbsp}}170
| colspan="2" style="background: #c0c0c0; color: black" | 192,{{nnbsp}}192,{{nnbsp}}192
| style="background: #e5e5e5; color: black" | 229, 229, 229
| style="background: #cccccc; color: black" | 204,{{nnbsp}}204,{{nnbsp}}204
| style="background: #BFBFBF; color: black" | 191,{{nnbsp}}191,{{nnbsp}}191
| style="background: #bbbbbb; color: black" | 187,{{nnbsp}}187,{{nnbsp}}187
| style="background: #d2d2d2; color: black" | 210,{{nnbsp}}210,{{nnbsp}}210
| style="background: #e5e5e5; color: black" | 229,{{nnbsp}}229,{{nnbsp}}229
| style="background: #cccccc; color: black" | 204,{{nnbsp}}204,{{nnbsp}}204
| style="background: #e5e5e5; color: black" | 229,{{nnbsp}}229,{{nnbsp}}229
|-
| {{tt|90}} || {{tt|100}} || {{nobr|Bright Black (Gray)}}
| style="background: #555555; color: white" | 85,{{nnbsp}}85,{{nnbsp}}85
| colspan="2" style="background: #808080; color: black" | 128,{{nnbsp}}128,{{nnbsp}}128
| style="background: #666666; color: white" | 102, 102, 102
| style="background: #767676; color: white" | 118,{{nnbsp}}118,{{nnbsp}}118
| style="background: #666666; color: white" | 102,{{nnbsp}}102,{{nnbsp}}102
| style="background: #555555; color: white" | 85,{{nnbsp}}85,{{nnbsp}}85
| style="background: #7f7f7f; color: white" | 127,{{nnbsp}}127,{{nnbsp}}127
| style="background: #7f7f7f; color: white" | 127,{{nnbsp}}127,{{nnbsp}}127
| style="background: #808080; color: black" | 128,{{nnbsp}}128,{{nnbsp}}128
| style="background: #000000; color: white" | 0,{{nnbsp}}0,{{nnbsp}}0
|-
| {{tt|91}} || {{tt|101}} || Bright Red
| style="background: #FF5555; color: white" | 255,{{nnbsp}}85,{{nnbsp}}85
| colspan="2" style="background: #ff0000; color: white" | 255,{{nnbsp}}0,{{nnbsp}}0
| style="background: #f14c4c; color: white" | 241, 76, 76
| style="background: #e74856; color: white" | 231,{{nnbsp}}72,{{nnbsp}}86
| style="background: #E60000; color: white" | 230,{{nnbsp}}0,{{nnbsp}}0
| style="background: #ff5555; color: white" | 255,{{nnbsp}}85,{{nnbsp}}85
| colspan="4" style="background: #ff0000; color: white" | 255,{{nnbsp}}0,{{nnbsp}}0
|-
| {{tt|92}} || {{tt|102}} || Bright Green
| style="background: #55FF55; color: black" | 85,{{nnbsp}}255,{{nnbsp}}85
| colspan="2" style="background: #00ff00; color: black" | 0,{{nnbsp}}255,{{nnbsp}}0
| style="background: #23d18b; color: white" | 35, 209, 139
| style="background: #16c60c; color: black" | 22,{{nnbsp}}198,{{nnbsp}}12
| style="background: #00D900; color: black" | 0,{{nnbsp}}217,{{nnbsp}}0
| style="background: #55ff55; color: black" | 85,{{nnbsp}}255,{{nnbsp}}85
| style="background: #00fc00; color: black" | 0,{{nnbsp}}252,{{nnbsp}}0
| colspan="3" style="background: #00ff00; color: black" | 0,{{nnbsp}}255,{{nnbsp}}0
|-
| {{tt|93}} || {{tt|103}} || Bright Yellow
| style="background: #FFFF55; color: black" | 255,{{nnbsp}}255,{{nnbsp}}85
| colspan="2" style="background: #ffff00; color: black" | 255,{{nnbsp}}255,{{nnbsp}}0
| style="background: #f5f543; color: black" | 245, 245, 67
| style="background: #f9f1a5; color: black" | 249,{{nnbsp}}241,{{nnbsp}}165
| style="background: #E5E500; color: black" | 230,{{nnbsp}}230,{{nnbsp}}0
| style="background: #ffff55; color: black" | 255,{{nnbsp}}255,{{nnbsp}}85
| colspan="4" style="background: #ffff00; color: black" | 255,{{nnbsp}}255,{{nnbsp}}0
|-
| {{tt|94}} || {{tt|104}} || Bright Blue
| style="background: #5555FF; color: white" | 85,{{nnbsp}}85,{{nnbsp}}255
| colspan="2" style="background: #0000ff; color: white" | 0,{{nnbsp}}0,{{nnbsp}}255
| style="background: #3b8eea; color: white" | 59, 142, 234
| style="background: #3b78ff; color: white" | 59,{{nnbsp}}120,{{nnbsp}}255
| style="background: #0000FF; color: white" | 0,{{nnbsp}}0,{{nnbsp}}255
| style="background: #5555ff; color: white" | 85,{{nnbsp}}85,{{nnbsp}}255
| style="background: #0000fc; color: white" | 0,{{nnbsp}}0,{{nnbsp}}252
| style="background: #5c5cff; color: white" | 92,{{nnbsp}}92,{{nnbsp}}255<ref>Changed from 0,{{nnbsp}}0,{{nnbsp}}255 in July 2004 {{cite web |url=http://invisible-island.net/xterm/xterm.log.html#xterm_192 |title=Patch #192 – 2004/7/12 – XFree86 4.4.99.9}}</ref>
| style="background: #0000ff; color: white" | 0,{{nnbsp}}0,{{nnbsp}}255
| style="background: #5c5cff; color: white" | 92,{{nnbsp}}92,{{nnbsp}}255
|-
| {{tt|95}} || {{tt|105}} || Bright Magenta
| style="background: #FF55FF; color: black" | 255,{{nnbsp}}85,{{nnbsp}}255
| colspan="2" style="background: #ff00ff; color: white" | 255,{{nnbsp}}0,{{nnbsp}}255
| style="background: #d670d6; color: white" | 214, 112, 214
| style="background: #b4009e; color: white" | 180,{{nnbsp}}0,{{nnbsp}}158
| style="background: #E600E6; color: white" | 230,{{nnbsp}}0,{{nnbsp}}230
| style="background: #ff55ff; color: white" | 255,{{nnbsp}}85,{{nnbsp}}255
| colspan="4" style="background: #ff00ff; color: white" | 255,{{nnbsp}}0,{{nnbsp}}255
|-
| {{tt|96}} || {{tt|106}} || Bright Cyan
| style="background: #55FFFF; color: black" | 85,{{nnbsp}}255,{{nnbsp}}255
| colspan="2" style="background: #00ffff; color: black" | 0,{{nnbsp}}255,{{nnbsp}}255
| style="background: #29b8dB; color: white" | 41, 184, 219
| style="background: #61d6d6; color: black" | 97,{{nnbsp}}214,{{nnbsp}}214
| style="background: #00E6E6; color: black" | 0,{{nnbsp}}230,{{nnbsp}}230
| style="background: #55ffff; color: black" | 85,{{nnbsp}}255,{{nnbsp}}255
| colspan="4" style="background: #00ffff; color: black" | 0,{{nnbsp}}255,{{nnbsp}}255
|-
| {{tt|97}} || {{tt|107}} || Bright White
| colspan="3" style="background: #ffffff; color: black" | 255,{{nnbsp}}255,{{nnbsp}}255
| style="background: #e5e5e5; color: black" | {{nobr|229, 229, 229}}
| style="background: #f2f2f2; color: black" | 242,{{nnbsp}}242,{{nnbsp}}242
| style="background: #E6E6E6; color: black" | 230,{{nnbsp}}230,{{nnbsp}}230
| colspan="5" style="background: #ffffff; color: black" | 255,{{nnbsp}}255,{{nnbsp}}255
|}
</div>
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

people = {}

def remove_person(number):
    """
    Remove a person from the list of people with numbers.
    """
    if number in people:
        del people[number]

def add_person(number, name):
    """
    Add a person to the list of people and numbers.
    """
    people[number] = name

def add_money(number, amount):
    """
    Add money to a person with a specific number.
    """
    if number in people:
        if 'money' not in people[number]:
            people[number]['money'] = 0
        people[number]['money'] += amount

def remove_money(number, amount):
    """
    Remove money from a person with a specific number.
    """
    if number in people and 'money' in people[number]:
        people[number]['money'] -= amount

def list_people():
    """
    Print the list of people with numbers.
    """
    for number, data in people.items():
        print(f"{number}: {data['name']}, {data.get('money', 0)}")

while True:
    command = input("$ ")
    if command.startswith("$remove a person"):
        _, number = command.split()
        remove_person(int(number))
    elif command.startswith("$add a person"):
        _, number, name = command.split()
        add_person(int(number), name)
    elif command.startswith("$add money to this person with a specific number"):
        _, number, amount = command.split()
        add_money(int(number), int(amount))
    elif command.startswith("$remove money from this person with a specific number"):
        _, number, amount = command.split()
        remove_money(int(number), int(amount))
    elif command.startswith("$the list of people with numbers"):
        list_people()
    elif command.startswith("$list"):
        print("$remove a person [number]")
        print("$add a person [number] [name]")
        print("$add money to this person with a specific number [number] [amount]")
        print("$remove money from this person with a specific number [number] [amount]")
        print("$the list of people with numbers")
        print("$list")
    else:
        print("Invalid command")

global.owner = [
  ['94764497078', 'Sandaru', true],
  ['6281255369012', 'Ash', true], 
  [''] 
] //Number of owners

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ᴛʜᴇ ɢᴜʀᴜ-ʙᴏᴛ'
global.premium = 'true'
global.packname = 'GURU┃ᴮᴼᵀ' 
global.author = '@Asliguru' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

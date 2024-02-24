const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('General Progs uptime 🆙')
});

app.listen(3000, () => {
  console.log('server started');
});

app.post("/generalprogs", (req, res) => {
  console.log("the uptime worked by general progs")
  res.send({
    msg: "uptime worked",
    access: "by_generalprogs",
  });
});

app.get("/generalprogs", (req, res) => {
  res.send("uptime worked");
});



const { Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Permissions, Discord, EmbedBuilder, Modal, TextInputComponent } = require('discord.js');
const fs = require('fs')
const inlinereply = require('discord-reply');
const probot = require("probot-tax");
const data = require("./config.json")
const mainGuildID = require("./config.json")
const coolDown = new Set()
const dotenv = require('dotenv')
const db = require("pro.db")
const { Database } = require("st.db");
const mongoose = require("mongoose")
dotenv.config()
let prefix = "-"
let sug = "1182362178347606116";
let tax = "1170356023098351697";
let order = "1170355982371659857";
let cmd = "1170356024813817857";
// the client
let client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION "], repliedUser: false, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

module.exports = client

// Commands && SlashCommands && Events Handling and Initializing The Whole Project..

client.config = data
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.queue = new Map();
require(`./source/handlers/cmdHandler/command.js`)(client);
require(`./source/handlers/slashHandler/slash.js`)(client);
require(`./source/handlers/eventHandler/events.js`)(client);

// handling errors 
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});
process.on('typeError', error => {
  console.error('Unhandled type rejection:', error);
});


let link = "https://cdn.discordapp.com/attachments/1182361923094843484/1184841262638043156/Line1_1.png?ex=658d706a&is=657afb6a&hm=683c47befaa4ab71647092f8fc648694bd9c7f601739bcee9321aa14516ccd6b&";
// كود خط تلقائي
let autoline_channel = ['1182362090527264919', '1182362091915595836', '1182362097334632528', '1182362098328670289', '1182362103743516682', '1182362109208711238', '1182362110160810004', '1182362116565500044', '1182362118436175974'] // ايدي الروم (تقدر تضيف اكثر من روم)
let line = `https://media.discordapp.net/attachments/1182361923094843484/1184841262638043156/Line1_1.png?ex=658d706a&is=657afb6a&hm=683c47befaa4ab71647092f8fc648694bd9c7f601739bcee9321aa14516ccd6b&`//رابط الخط

client.on(`messageCreate`, async message => {
        if(message.channel.type === "DM"|| message.author.bot) return
        if(autoline_channel.includes(message.channel.id)) {
                message.channel.send({files : [line]})
        }
})

let notifchann = '';//قناه الاشعارات
let channelId = ['','','',''];//ايدي القنوات الي بدك تخفيها
let minute = 10;
let hour = 12;

function checkTime() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  let channel = client.channels.cache.get(channelId);
    let role0 = '1165771196206420072'
    let role00 = '1182361388857954465'
    let role1 = '1182361436563968010'
    let role2 = '1182361438203940874'
    let role3 = '1182361439923621928'
    let role4 = '1182361443883044986'
    let role5 = '1182361441550999662'
    let role6 = '1182361446932283463'
    let role7 = '1182361449172041849'
    let role480 = '1182361458655375360'
    let role901 = '1182361462426058752'
    let role1100 = '1182361465450143844'


  if (currentHour === hour && currentMinute === minute) {
    channel.overwritePermissions([
      {
        id: role0,
        deny: ['VIEW_CHANNEL'],
      },
      {
        id: role00,
        deny: ['VIEW_CHANNEL'],
      },
      }
      {
        id: role1,
        deny: ['VIEW_CHANNEL'],
      },
      {
        id: role2,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role3,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role4,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role5,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role6,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role7,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role480,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role901,
        deny: ['VIEW_CHANNEL']
      },
      {
        id: role1100,
        deny: ['VIEW_CHANNEL']
      },
    ]);
    console.log('Channel Hidden!');
    channel.send('Channel Hidden!'); // عدل علي الرساله لو بدك
  } else {
    channel.overwritePermissions([
      {
        id: role0,
        allow: ['VIEW_CHANNEL'],
      },
      {
        id: role00,
        allow: ['VIEW_CHANNEL'],
      },
      {
        id: role1,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role2,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role3,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role4,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role5,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role6,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role7,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role480,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role901,
        allow: ['VIEW_CHANNEL']
      },
      {
        id: role1100,
        allow: ['VIEW_CHANNEL']
      }
    ]);
    console.log('Channel Visible!');
    channel.send('Channel Visible!'); // عدل علي الرساله لو بدك
  }
}






client.on('message', function(message) {
  let args = message.content.split(",");
  if (message.author.bot) return;
  if (sug.includes(message.channel.id)) {
    message.delete()
    const embed = new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
      .setColor(`RANDOM`).setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setDescription(`> **${args}**`)
      .setTimestamp()
    let attachm = message.attachments.first()
    if (attachm) {
      embed.setImage(attachm.proxyURL)
    }
    message.channel.send({ embeds: [embed] }).then(msg => {
      msg.react('✅').then(() => {
        msg.react('❌')
      })
      message.channel.send({ files: [link] });
    })

  }
})


client.on('guildMemberUpdate', async (oldMember, newMember) => {
  let idchannel = "1182361961690845194"// أيدي الروم
  let boostColor = '#ff73fa';// هنا اختار لون الامبد
  if (!oldMember.premiumSince && newMember.premiumSince) {
    let embed = new MessageEmbed()

      .setColor(boostColor)
      .setDescription(`${newMember.user.tag} شكرا لك على البوست 🌹 `);


    return client.channels.cache.get(idchannel).send(embed)
  }
  if (oldMember.premiumSince && newMember.premiumSince) {
    let embed = new MessageEmbed()

      .setColor(boostColor)
      .setDescription(`${newMember.user.tag} شكرا لك على البوست الثاني 🌹🌹🌹`)
    return client.channels.cache.get(idchannel).send(embed)
  }
});


const feedbck = "1182362176288211014"
client.on('message', function(message) {
  let args = message.content.split(",");
  if (message.author.bot) return;
  if (feedbck.includes(message.channel.id)) {
    message.delete()
    const embed = new MessageEmbed().setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
      .setColor(`RANDOM`).setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setDescription(`> **${args}**`)
      .setTimestamp()
    let attachm = message.attachments.first()
    if (attachm) {
      embed.setImage(attachm.proxyURL)
    }
    message.channel.send({ embeds: [embed] }).then(msg => {
      msg.react('❤')
      message.channel.send({ files: [link] });
    })
  }
});












client.on("messageCreate", async (message) => {
  if (message.content == prefix + "spin") {
    if (!message.channel.name.startsWith('ticket-')) return;
    try {
      const prizes = db.get(`prize_${message.guild.id}`)
      if (!prizes) return message.reply(`قم باضافة جوائز للفة \n \`${prefix}addprize\``)
      const recipient = db.get(`receiver_${message.guild.id}`);
      if (!recipient) return message.reply(`قم بتحديد مستقبل الكريدت \n \`${prefix}setreceiver\``)
      const probot = db.get(`probot_${message.guild.id}`);
      if (!probot) return message.reply(`قم بتحديد ايدي البروبوت \n \`${prefix}setprobot\``)
      const price = db.get(`price_${message.guild.id}`);
      if (!price) return message.reply(`قم بتحديد سعر اللفة \n \`${prefix}setprice\``)
      const pricenotax = 25000
      const transfersrooms = message.channel;
      const options = db.get(`prize_${message.guild.id}`)



      const winchannel = message.guild.channels.cache.get(`1170355882140373022`);
      const tranembed = new MessageEmbed()
        .setTitle("قم بالتحويل للف عجلة الحظ")
        .setDescription(`لديك دقيقة لتحويل المبلغ المطلوب \n \`\`\` c ${recipient} ${price}\`\`\``)
        .setColor('DarkButNotBlack');
      message.reply({ embeds: [tranembed] })
      const collectorFilter = m => (m.content.includes(pricenotax) && m.content.includes(pricenotax) && (m.content.includes(recipient) || m.content.includes(`<@${recipient}>`)) && m.author.id == probot)

      const collector = await transfersrooms.createMessageCollector({
        filter: collectorFilter,
        max: 1,
        time: 1000 * 60 * 1
      });
      collector.on("collect", async () => {
        const randomChoice = options[Math.floor(Math.random() * options.length)];
        const winembed = new MessageEmbed()
          .setTitle('لقد فزت ')
          .setDescription(`**لقد فزت ب ${randomChoice} 🎉 \n <@${message.author.id}>**`)
          .setTimestamp()
          .setFooter(message.guild.name, message.guild.iconURL())


        message.reply(`اوووو جاري لف العجلة 🛞 <@${message.author.id}>`).then(async (a) => {
          setTimeout(() => {
            a.delete()
            message.channel.send({ embeds: [winembed] })
            winchannel.send({ embeds: [winembed] })
          }, 5000);
        })
      });
      collector.on("end", async () => {
        message.channel.send(`<@${message.author.id}> لا تقم بالتحويل لقد انتهى الوقت`)
      });
    } catch (error) {
      console.log(error)
    }
  }
})




const chalk = import('chalk');

client.on('ready', () => {
  console.log("\x1b[31m", `BotName: ${client.user.tag}\nBotPrefix: / `
  );
  console.log("\x1b[32m", `Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  client.user.setActivity(client.config.Activity, { type: client.config.ActivityType })
})

mongoose.connect(process.env.mongodb).then(() => console.log("\x1b[36m", `Data Connected `));

client.login(process.env.token);

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "clos") {

    if (interaction.message && interaction.message.delete) {
      await interaction.message.delete();
    }
    interaction.channel.send({ content: `$close` })
    interaction.channel.send({ content: `$transcript` })
    interaction.channel.send({ content: `$delete` })
  }
  if (interaction.customId === "open-rooms") {
    interaction.reply({ content: `موعد غلق الرومات الساعة 9:00 مساء بتوقيت مصر `, ephemeral: true })
  }
  if (interaction.customId === "close-rooms") {
    interaction.reply({ content: `موعد فتح الرومات الساعه 9:00 صباح بتوقيت مصر`, ephemeral: true })
  }
})


client.on('messageCreate', message => {
  if (message.content === (`خط`)) {

    message.channel.send({ files: [data.lineurl] })
    message.delete()
  }
})


client.on('messageCreate', async (message) => {
  if (message.content === `$select`) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('اختر هنا')
          .addOptions([
            {
              //label هو اسم الاختيار
              //description الوصف تحت
              label: 'الرتب العادية',
              value: 'option1',

            },
            {
              label: 'الرتب النادرة',
              value: 'option2',

            },
            {
              label: 'الرومات الخاصة',
              value: 'option3',

            },
            {
              label: 'الاعلانات',
              value: 'option4',

            },
            {
              label: 'المنشورات',
              value: 'option5',

            },
            {
              label: 'الاضافات',
              value: 'option6',



            }
          ]),
      );

    const embed = new MessageEmbed()
      .setTitle('Toto S Information')
      .setDescription(`**لرؤية معلومات الرتب العامة اختار الرتب العامة
لرؤية معلومات الرتب النادرة اختار الرتب النادرة
لرؤية معلومات الرومات الخاصة اختار الرومات الخاصة
لرؤية معلومات الاعلانات اختار الاعلانات
لرؤية معلومات المنشورات المميزة اختار المنشورات المميزة
لرؤية معلومات الاضافات اختار الاضافات
      **`)
      .setColor('#19172b')
      .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184868918679048193/INFO_BY_EDU2RDO.png?ex=658d8a2c&is=657b152c&hm=05cac50a017b49aa7d378158bd553d40683c2b51d9f67fc69ca439fcb66673c0&');
    await message.channel.send({ embeds: [embed], components: [row] });
  }
});
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const selectedValue = interaction.values[0];

  switch (selectedValue) {
    case 'option1':
      const embed1 = new MessageEmbed()
        .setColor('#19172b')
        .setTitle('الرتب العادية')
        .setDescription(` **Normal Roles Informations・معلومات الرتب العامة

@🜲 Master S : = 60,000

النشر بكل الرومات
نشر الصور بكل الرومات
إمكانية المنشن في الرومات

@🜲 Great S : = 55,000

النشر بكل الرومات ماعدا [التصاميم - البرمجيات]
نشر الصور بكل الرومات
إمكانية المنشن بكل الرومات

@🜲 Perfect S : = 45,000

النشر بكل الرومات ماعدا [التصاميم - البرمجيات]
نشر الصور بروم حسابات فقط
إمكانية المنشن بكل الرومات

@🜲 Excellent S : = 40,000

النشر بكل الرومات ماعدا [التصاميم - البرمجيات]
لايمكنه نشر الصور
المنشن بكل الرومات

@🜲 Good S : = 35,000

النشر بكل الرومات ماعدا [التصاميم - البرمجيات]
لا يمكنه نشر الصور
لا يمكنه المنشن

@🜲 Designer S : = 30,000

النشر بروم التصاميم فقط
نشر الصور بروم التصاميم فقط
إمكانية المنشن بروم التصاميم فقط

@🜲 Developer : = 25,000

النشر بروم البرمجيات فقط
نشر الصور بروم البرمجيات فقط
إمكانية المنشن بروم البرمجيات فقط

ملاحظات :
لطلب رتبة يرجى التوجه الى : ⁠<#1182362214783516691>
التحويل لـ : <@1115289570741858354>
اذا قمت بالتحويل لأحد غير الحساب المذكور أعلاه فلن يتم تسليمك الرتبة و لن نتحمل المسؤولية**`)

        .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184869136619290715/INFO_BY_EDU2RDO_1.png?ex=658d8a5f&is=657b155f&hm=b31372f3b751bc6efe2f512f49fd653a82a3f26bce0ba5c36a35a82c84b29f9e&')
      await interaction.reply({ ephemeral: true, embeds: [embed1] });

      break;
    case 'option2':
      const embed2 = new MessageEmbed()
        .setColor('#19172b')
        .setTitle('الرتب النادرة')
        .setDescription(`**Rare Roles Informations・معلومات الرتب النادرة
@🜲 Vip S : = 100,000

النشر بكل الرومات مع امكانيه نشر صور
نشر كل ساعه بروم Vip
المنشن افري ون مره اليوم بروم Vip
منشور مميز هير كل اسبوع مجانا

@🜲 Toto S : = 180,000

النشر بكل الرومات مع امكانية نشر صور
نشر كل ساعة بروم Vip
مسموحلك تمنشن ايفري ون مرتين باليوم بروم Vip
منشور مميز هير كل 4 ايام مجانا
خصم 30% على الاعلانات " ما عدا اعلانات الي فيها قيف اوايات "

@🜲 Dragon S : = 250,000

النشر بكل الرومات مع امكانية نشر صور
نشر كل ساعة بروم Vip
مسموحلك منشن ايفري ون ثلاث مرات باليوم بروم Vip
منشور مميز كل يومين مجانا
خصم 50% على الاعلانات " ما عدا اعلانات الي فيها قيف اوايات "
عند شرائك الرتبه تقدر تسوي رتبة بالاسم و الون الي تبيه

        ملاحظات :
        لطلب رتبة يرجى التوجه الى : ⁠<#1182362214783516691>
        التحويل لـ : <@1115289570741858354>
        اذا قمت بالتحويل لأحد غير الحساب المذكور أعلاه فلن يتم تسليمك الرتبة و لن نتحمل المسؤولية**`)
        .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184871744293572648/Toto_S_info_5.png?ex=658d8ccd&is=657b17cd&hm=25ad768146cb65e2c2dd6261b018921c21aa957816856ae2731f3f2d0b1dedcb&')
      await interaction.reply({ ephemeral: true, embeds: [embed2] });
      break;
    case 'option3':
      const embed3 = new MessageEmbed()
        .setColor('#19172b')
        .setTitle('الرومات الخاصة')
        .setDescription(`**
              Private Rooms Informations・معلومات الرومات الخاصة
              @🜲 Private S : = 40,000

              روم باسمك
              نشر كل نصف ساعة مع صلاحية رفع الصور و منشن هير

              ملاحظات :
              لطلب روم يرجى التوجه الى : ⁠<#1182362214783516691>
              التحويل لـ : <@1115289570741858354>
              اذا قمت بالتحويل لأحد غير الحساب المذكور أعلاه فلن يتم تسليمك الروم و لن نتحمل المسؤولية**`)
        .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184872008023019632/Toto_S_info_1.png?ex=658d8d0c&is=657b180c&hm=3f2fd4a8197fd0ac2c71b4fa118259559b5ae0855b7e00292d87b868938e7267&')
      await interaction.reply({ ephemeral: true, embeds: [embed3] });
      break;
    case 'option4':
      const embed4 = new MessageEmbed()
        .setColor('#19172b')
        .setTitle('معلومات الاعلانات')
        .setDescription(`**Ads Informations・معلومات الاعلانات

بدون منشن | No Mention
25,000 Credits

Here | منشن هير
35,000 Credits

Everyone | منشن للكل
45,000 Credits

هدايا الاعلانات | Ads Gifts
60,000 Credits

Private Channel Without Giveaway | روم خاص بدون قيف اواي
70,000 Credits

Private Channel With Giveaway | روم خاص مع قيف اواي
90,000 Credits

ملاحظات :
لطلب اعلان يرجى التوجه الى : ⁠<#1182362214783516691>
التحويل لـ : <@1115289570741858354>
اذا قمت بالتحويل لأحد غير الحساب المذكور أعلاه فلن يتم تسليمك الاعلان و لن نتحمل المسؤولية**`)
        .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184872375179808778/INFO_BY_EDU2RDO_2.png?ex=658d8d64&is=657b1864&hm=064c3b0d4d6fb7659593f2c97dce6dabcd8e4e44440ff83234a27b189297246f&')
      await interaction.reply({ ephemeral: true, embeds: [embed4] });
      break;
    case 'option5':
      const embed5 = new MessageEmbed()
        .setColor('#19172b')
        .setTitle('المنشورات المميزة')
        .setDescription(`**Special Publications Informations・معلومات المنشورات المميزة
Mention Here | منشن هير
25,000 Credits

Mention Everyone | منشن ايفريون
50,000 Credits

        ملاحظات :
        لطلب منشور يرجى التوجه الى : ⁠<#1182362214783516691>
        التحويل لـ : <@1115289570741858354>
        اذا قمت بالتحويل لأحد غير الحساب المذكور أعلاه فلن يتم تسليمك المنشور و لن نتحمل المسؤولية**`)
        .setImage('https://cdn.discordapp.com/attachments/1182361923094843484/1184872546097696828/INFO_BY_EDU2RDO_3.png?ex=658d8d8c&is=657b188c&hm=ddcc18f02ef5055302d43bc771049156cfc53ed808affda82aa953a03006f529&')
      await interaction.reply({ ephemeral: true, embeds: [embed5] });
      break;
    case 'option6':
      const embed6 = new MessageEmbed()
        .setColor('#19172b')
        .setDescription(`**Addons Informations・معلومات الاضافات

        Warn 25% = 15,000
        Warn 25% + Warn 50% = 25,000
        ملاحظة : عند وصولك للوارن 100% ممنوع ينشال نهائي

        Trust S : بائع و تجيب 25 عملية بيع
        بعد ما تجيب العمليات حياك ⁠<#1182362214783516691>
        ملاحظة : هاد الشي لا يعني انه موثوق ولا نضمنه , فقط انه عنده عمليات بيع لا اكثر ولا اقل

        Order : بائع و تروح لروم ⁠♢〢・اشعارات・السيلرز و تضغط رياكشن
        ملاحظة : فقط عشان تشوف رومات الطلبات

        رتبة حماية من التحذيرات | Protection Role
        الفكرة : لما توصل تحذير 100% بيتم حذف رتبة الحماية منك ولكن رتبة البائع ما تنحذف
        <@1184877709604700242>

        Partner : تكون بارتنر مع سيرفرنا , البارتنر مفتوح حاليا

        Friend : تكون صديق احد الاونرات

        Special : تكون مميز بالسيرفر

        Boost : سوي بوست للسيرفر و تاخدها تلقائيا
        **`)
        .setImage(`https://cdn.discordapp.com/attachments/1182361923094843484/1184872376064815154/INFO_BY_EDU2RDO_4.png?ex=658d8d64&is=657b1864&hm=0845a066d76df4b48581646c98c21fd3ea0e7ee111d2d07b4f77986bab493e91&`)
       await interaction.reply({ ephemeral: true, embeds: [embed6] });
  };
}


);
client.on("messageCreate", async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.startsWith(prefix + 'embed') || (message.content.startsWith(prefix + 'e'))) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
    }
    if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
      return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
    }
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('**يرجى وضع النص أولاً .**')
    message.delete();
    const embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setDescription(`**${args}**`)
      .setColor("BLACK")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))

      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
    let attach = message.attachments.first();
    if (attach) {
      embed.setImage(attach.proxyURL)
    }
    message.channel.send({ embeds: [embed] });

  }
})
client.on('guildMemberAdd', member => {
  let guild = client.guilds.cache.get("1081610007235285113");
  let asar1 = client.channels.cache.find(ch => ch.id === '1170355803623002153')
  let membercount = guild.members.cache.size;
  asar1.send(`** نورت يغالي ${member}**`).then(msg => msg.delete({ timeout: 5000 }));

});
///////////////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "say")) {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
        return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
      }
    await message.channel.sendTyping();
    let args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.reply("**يرجى وضع النص أولاً .**")
    message.delete()
    message.channel.send(`${args}`)
    await message.channel.stopTyping();
  }
})
client.on("messageCreate", async message => {
  if (message.content.startsWith("$close")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) 
      if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
        return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
      }
    message.channel.delete();

  }
})


client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + 'come')) {
    if (message.author.bot) return;
    if (!message.member.roles.cache.has('1182361580676075650')) return; // ايدي الرتبة الي تقدر تستعمل الامر
    if (!message.member.permissions.has('ADMINISTRATOR')) return;

    let user = message.mentions.members.first();
    if (!user) return message.reply(`**Usage: \`${prefix}come\` @user**`);

    user.send(`**Please Come To <#${message.channel.id}> \nFor ${user}**`);

    let embed = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(`**✅ Done Send To ${user}**`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embeds: [embed] });
  }
});






const CategoryID = data.buycategoryId



client.on('messageCreate', async message => {
  const allowedRoles = ['118235561580676075650'];

  if (message.content.startsWith('-send') && message.guild) {
    const member = message.member;

    if (member && member.roles.cache.some(role => allowedRoles.includes(role.id))) {

      let msg = new MessageActionRow()
        .addComponents(new MessageButton()
          .setCustomId(`msg1`)

          .setStyle('SECONDARY'))

      let sendsupport = new MessageEmbed()
        .setColor(data.color)
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(`# - ${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 


- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
        .setImage(``)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
        .setFooter({ text: `${data.foot}` })

      message.channel.send({ embeds: [sendsupport], components: [msg] });
    }
  }
})

let autotax = ['1182362164611272765'];

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (autotax.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let tax5 = Math.floor((2.5 / 100) * args)
    let tax6 = Math.floor(tax4 + args2 * (20) / (19) + (1) - (args2))
    let tax7 = Math.floor(tax + tax5)
    let tax8 = Math.floor(tax4 + tax5)
    let tax9 = Math.floor((5 / 100) * args - args * -0)
    let tax10 = Math.floor(tax - args)
    let tax11 = Math.floor(tax9 + tax10)
    let tax12 = Math.floor(tax - tax11)


    let embed = new MessageEmbed()



      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setTimestamp()

      .setFooter({
        text: `By  : ${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`
      })

      .addFields(
        {
          name: "> **السعر بدون ضرائب :**", value: `**\`${args}\`**`
        },
        {
          name: "> **السعر مع ضرائب :**", value: `**\`${tax}\`**`
        },
        {
          name: "> **ضرائب الوسيط بدون نسبة :**", value: `**\`${tax4}\`**`
        },
        {
          name: "> **ضرائب الوسيط مع نسبة :**", value: `**\`${tax6}\`**`
        },
        {
          name: "> **نسبة الوسيط :**", value: `**\`${tax9}\`**`
        },
        {
          name: "> **تحويل بدون ضرائب :**", value: `**\`${tax12}\`**`
        })

      .setTimestamp()

    message.reply({ embeds: [embed] }).catch((err) => {
      console.log(err.message)
    });
  }
});

let channel_post = data.shareroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_post &&
    (message.content.includes('@here') || message.content.includes('@everyone'))) {

    message.channel.send({
      content: `**منشور مدفوع ،  نخلي مسؤوليتنا من يلي يصير بينكم
تريد مثله حياك <#1182362214783516691> **`});

    await new Promise(r => setTimeout(r, 1000))

    await message.channel.send({ files: [data.lineurl] });
  }
});

channel_ads = data.adsroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_ads &&
    (message.content.includes('@here') || message.content.includes('@everyone'))) {

    message.channel.send({
      content: `**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
تريد مثله حياك <#1182362214783516691> `});

    await new Promise(r => setTimeout(r, 1000))

    await message.channel.send({ files: [data.lineurl] });
  }
});

channel_ad = data.giftroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_ad &&
    (message.content.includes('@here') || message.content.includes('@everyone'))) {
    await new Promise(r => setTimeout(r, 1500))
    message.channel.send({
      content: `**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
تريد مثله حياك <#1182362214783516691>**`});

    message.channel.send({ files: [data.lineurl] });
  }
});

client.on('messageCreate', async mesg => {
  if (mesg.content == `-close`) {

    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`close-rooms`)
        .setLabel("موعد الفتح")
        .setEmoji("🕙")
        .setStyle('SECONDARY')
      );

    if (!mesg.member.roles.cache.find((role) => role.id === '1182361501319835728')) //ايدي رول الي يقدر يتحكم
      return mesg.reply({ content : 'لا تملك الرتبة المطلوبة' })
    let men = mesg.guild.roles.cache.find(role => role.id === '1182361388857954465'); //ايدي رول الممبر
    if (!men) return;
    let C1 = client.channels.cache.get(`1182362090527264919`); //Vip
    let C2 = client.channels.cache.get(`1182362091915595836`); //acc
    let C3 = client.channels.cache.get(`1182362097334632528`);  //dis

    let C5 = client.channels.cache.get(`1182362110160810004`);
    //dev
    let C6 = client.channels.cache.get(`1182362109208711238`);
    //trq
    let C7 = client.channels.cache.get(`1182362098328670289`);
    //coins
    let C8 = client.channels.cache.get(`1182362103743516682`);
    //gim
    let C9 = client.channels.cache.get(`1182362118436175974`);
    //other
    let C10 = client.channels.cache.get(`1182362131086192670`)
    //order
    C1.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C2.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C3.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });

    C5.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C6.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C7.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C8.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false }); C9.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    C10.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
    //C10.permissionOverwrites.create(men,{'VIEW_CHANNEL': false}); 
    C1.bulkDelete(100, true)
    C2.bulkDelete(100, true)
    C3.bulkDelete(100, true)

    C5.bulkDelete(100, true)
    C6.bulkDelete(100, true)
    C7.bulkDelete(100, true)
    C8.bulkDelete(100, true)
    C9.bulkDelete(100, true)

    //C10.bulkDelete(100, true)
    mesg.reply({ content: `__**Closed**__ ⛔️` });
    let news = client.channels.cache.get(`1182362060043059262`);// ايدي الروم الي ينشر فيه حالة النشر
    news.bulkDelete(100, true)
    await news.send({ content: `تم غلق الرومات @everyone` })
    await news.send({ files: [data.lineurl], components: [row] })   // رابط الخط
  }
})


client.on('messageCreate', async mesg => {
  if (mesg.content == `-open`) {

    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`open-rooms`)
        .setLabel("موعد الغلق")
        .setEmoji("🕝")
        .setStyle('SECONDARY')
      );

    if (!mesg.member.roles.cache.find((role) => role.id === '1182361501319835728')) //ايدي رول الي يقدر يتحكم
      return mesg.reply({ content : 'لا تملك الرتبة المطلوبة' })
    let men = mesg.guild.roles.cache.find(role => role.id === '1182361388857954465'); //ايدي رول الممبر
    if (!men) return;
    let C1 = client.channels.cache.get(`1182362090527264919`); //Vip
    let C2 = client.channels.cache.get(`1182362091915595836`); //acc
    let C3 = client.channels.cache.get(`1182362097334632528`);  //dis

    let C5 = client.channels.cache.get(`1182362110160810004`);
    //dev
    let C6 = client.channels.cache.get(`1182362109208711238`);
    //trq
    let C7 = client.channels.cache.get(`1182362098328670289`);
    //coins
    let C8 = client.channels.cache.get(`1182362103743516682`);
    //gim
    let C9 = client.channels.cache.get(`1182362118436175974`);
    //other
    let C10 = client.channels.cache.get(`1182362131086192670`)
    C1.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C2.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C3.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });

    C5.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C6.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C7.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C8.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true }); C9.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    C10.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
    //C10.permissionOverwrites.create(men,{'VIEW_CHANNEL': false}); 
    C1.bulkDelete(100, true)
    C2.bulkDelete(100, true)
    C3.bulkDelete(100, true)

    C5.bulkDelete(100, true)
    C6.bulkDelete(100, true)
    C7.bulkDelete(100, true)
    C8.bulkDelete(100, true)
    C9.bulkDelete(100, true)

    //C10.bulkDelete(100, true)
    mesg.reply({ content: `**Rooms is Back**` });
    let news = client.channels.cache.get(`1182362060043059262`);// ايدي الروم الي ينشر فيه حالة النشر
    news.bulkDelete(100, true)
    await news.send({ content: `تم اظهار الرومات @everyone` })
    await news.send({ files: [data.lineurl], components: [row] })   // رابط الخط
  }
})


const CmdRoom = '1170355982371659857' // ايدي الروم لي تكتب بيه الامر
const OrderRoom = '1170355989397127189' // ايدي الروم الي راح يترسل فيه الطلب
const OrderRool = '1170355473451581470' // ايدي الرول الي راح تتمنشن في الطلب
const lineLink = 'https://cdn.discordapp.com/attachments/1182361923094843484/1184841262638043156/Line1_1.png?ex=658d706a&is=657afb6a&hm=683c47befaa4ab71647092f8fc648694bd9c7f601739bcee9321aa14516ccd6b&' // رابط الخطcli


client.on('message', message => {
  if (message.channel.id !== '1182362131086192670') return;
  if (message.content.startsWith(prefix + 'طلب')) {

     //Your code he
    const request = message.content.split(' ').slice(1).join(' ')

          const dropdown = new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
                .setCustomId('dropdown')
                .setPlaceholder('اختر نوع الطلب الخاص بك')
                .addOptions([
                  {
                    label: 'منتج',
                    emoji : '🛒',
                    description: 'لجعل طلبك يذهب الي روم طلبات المنتجات',
                    value: '1182362138023567360',
                  },
                  {
                    label: 'تصاميم',
                    emoji: '🖌️' ,
                    description: 'لجعل طلبك يذهب الي روم طلبات التصاميم',
                    value: '1182362136668807318',
                  },
                  {
                    label: 'برمجه',
                    emoji: '💻',
                    description: 'لجعل طلبك يذهب الي روم طلبات البرمجيات',
                    value: '1182362143383900273',
                  }
                ])
            );
          const embed7 = new MessageEmbed()
                   .setTitle('**نظام الطلبات**')
.setDescription(`**برجاء اختيار 
منتج 🛒 : سيتم ارسال طلبك الي روم طلبات المنتجات
 تصميم 🖌️ : سيتم إرسال طلبك الي روم طلبات التصاميم
برمجه 💻 : سيتم إرسال طلبك الي روم طلبات البرمجه**

**الطلب الخاص بك :**
\`\`\`${request} \`\`\``)
          message.channel.send({ content: `**<@${message.author.id}> مرحبا يرجي اختيار نوع طلبك .**`, components: [dropdown], embeds: [embed7]})
            .then(sentMessage => {
              const collector = sentMessage.createMessageComponentCollector({ filter: i => i.isSelectMenu() });
              collector.on('collect', async (interaction) => {


                const selectedOption = interaction.values[0];
                const selectedOptionLabel = interaction.component.label;
                const selectedOptionDescription = interaction.component.description;
                const selectedOptionChannel = interaction.guild.channels.cache.get(selectedOption);

                const targetChannel = selectedOptionChannel;
                const senderMention = interaction.user.toString();
                let number = db.fetch(`OrderMsg_${interaction.guild.id}`);
                if (!number || number === null) number = 1;
                 db.add(`OrderMsg_${interaction.guild.id}`, 1);
                const optionEmbed = new MessageEmbed()
                  .setTitle('طلب جديد !')
                  .setDescription(`**صاحب الطلب**: ${senderMention}\n**رقم الطلب**: ${number}\n**الطلب**: 
\`\`\`${request}\`\`\``)
.setImage(lineLink)
                targetChannel.send({ content: `From ${senderMention}\nTo <@&1182361394226663434>`, embeds: [optionEmbed]})

                  .then(() => {
                    message.reply('تم إرسال طلبك بنجاح!')

              })
              });
            })

    };

});


client.on('messageCreate', async (message) => {
  if (message.channel.id === '1182362131086192670') {
  // code here

    setTimeout(() => {
      message.delete({timeout: 5000})
    }, 5000);
  }

  })



const timestamp = require('discord-timestamp');
const moment = require('moment');

client.on("interactionCreate", async interaction => {
  if (interaction.customId === "claim") {
    //فحص الشخص 
    let support = client.config.supportid

    if (!interaction.member.roles.cache.some((role) => role.id === support))

      return interaction.reply({ content: `**انت لست من طاقم الادارة**`, ephemeral: true })

    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
      .addComponents(
        new MessageButton()
          .setCustomId(`unclaim`)
          .setLabel("UnCliam")
          .setEmoji("➖")
          .setStyle('DANGER'))

    await interaction.message.edit({
      embeds: [
        new MessageEmbed()

          .setColor(data.color)

          .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
          .setDescription(`${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 


- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
          .setImage(``).setThumbnail(interaction.guild.iconURL({ dynamic: true }))
          //.setTimestamp();
          .setFooter({ text: `${data.foot}` })

      ], components: [row]
    }).then(async x => {
      let ch = interaction.channel
      ch.send(`$rename claimed-${interaction.member.user.username}`)

      await interaction.reply({ content: `**تم استلام التكت بواسطتك** `, ephemeral: true })

      await interaction.message.reply({
        embeds: [
          new MessageEmbed()

            .setDescription(`**تم استلام التذكرة بواسطة <@${interaction.member.id}>**`)
            .setColor(data.color)

        ], components: []
      })

      let owner = interaction.member.id
      db.set(`ownerticket_${interaction.channel.id}`, owner)

      let high = client.config.highroleId

      let point = db.get(`points_${interaction.guild.id}`);
      let ary = {
        user: `${interaction.member.id}`,
        points: 1
      };

      if (!point) {
        db.set(`points_${interaction.guild.id}`, [ary]);
      } else {
        let found = point.find(x => x.user === interaction.member.id);
        if (found) {
          found.points += 1; // Increment the points by 1
          point[point.indexOf(found)] = found;
        } else {
          point.push(ary); // If user not found, add them with 1 point
        }
        db.set(`points_${interaction.guild.id}`, point);




      }

    })

  }
})

////leave it 

client.on("interactionCreate", async interaction => {
  if (interaction.customId === "unclaim") {
    //فحص الشخص 
    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
      .addComponents(new MessageButton()
        .setCustomId(`claim`)
        .setLabel("Claim Ticket")
        .setStyle('SECONDARY')
      )

    let member = db.get(`ownerticket_${interaction.channel.id}`)


    if (!member) {


      await interaction.reply({ content: `لم اتم العثور على صاحب التكت `, ephemeral: true }).then(async aa => {
        await interaction.message.edit({
          embeds: [
            new MessageEmbed()

              .setColor(data.color)
              .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
              .setDescription(`# - ${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 

- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)

              .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
              //.setTimestamp();
              .setFooter({ text: `${data.foot}` })

          ], components: [row]
        })

        let support = client.config.supportId
        let ch = interaction.channel



      })
    }
    if (member) {
      if (!member.includes(interaction.member.id)) return interaction.reply({ content: `** انت لست مسؤول التذكرة لعدم الاستلام**`, ephemeral: true })


      await interaction.message.edit({
        embeds: [
          new MessageEmbed()

            .setColor(data.color)

            .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
            .setDescription(`# - ${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 


- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            //.setTimestamp();
            .setFooter({ text: `${data.foot}` })

        ], components: [row]
      }).then(async x => {


        let support = client.config.supportId
        let ch = interaction.channel

        ch.setName("ticket-unclaimed")



        let point = db.get(`points_${interaction.guild.id}`);
        let ary = {
          user: `${interaction.member.id}`,
          points: 1
        };

        if (!point) {
          db.set(`points_${interaction.guild.id}`, [ary]);
        } else {
          let found = point.find(x => x.user === interaction.member.id);
          if (found) {
            found.points -= 1; // Increment the points by 1
            point[point.indexOf(found)] = found;
          } else {
            point.push(ary); // If user not found, add them with 1 point
          }
          db.set(`points_${interaction.guild.id}`, point);




        }
        db.delete(`ownerticket_${interaction.channel.id}`)
      })
    }

  }
})

//////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ledarbord")) {

    let high = client.config.high

    if (!message.member.roles.cache.some((role) => role.id === high)) return message.reply({ embeds: [permissions] })


    let pointData = db.get(`points_${message.guild.id}`);

    if (pointData) {
      // Sort the data based on points in descending order
      pointData.sort((a, b) => b.points - a.points);

      // Create a leaderboard message
      let leaderboardMessage = `\n`;

      for (let i = 0; i < pointData.length; i++) {
        leaderboardMessage += `${i + 1} - <@${pointData[i].user}>  |  ${pointData[i].points}\n`;
      }

      // Send the leaderboard message
      // (You might need to adapt this part depending on your Discord library)

      let embed = new MessageEmbed()
        .setTitle("Leaderboard Tickets")
        .setDescription(`
  ** ${leaderboardMessage}**`)
        .setColor(data.color)
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
      //.setTimestamp();
      //   .setFooter({text : ``})

      message.reply({ embeds: [embed] });
    } else {
      message.reply("No data found for the leaderboard.");
    }



  }
})


client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "points")) {

    let support = client.config.supportId

    if (!message.member.roles.cache.some((role) => role.id === support))

      return message.reply({ embeds: [permissions] })

    let pointData = db.get(`points_${message.guild.id}`);


    let vale = pointData.find(x => x.user === message.author.id);

    if (!vale) return message.reply(`لا تمتلك نقاط`)
    let embed = new MessageEmbed()
      .setTitle(`${data.title} Points System`)
      .addField(`**الاداري**`, `<@${vale.user}>`)
      .addField(`**عدد التكتات**`, `** ${vale.points}\n**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      //.setTimestamp();
      // .setFooter({text : ` `})
      .setColor(data.color)
    await message.reply({ embeds: [embed] })

  }
})




/////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "reset user")) {

    let high = client.config.high

    if (!message.member.roles.cache.some((role) => role.id === high))
      return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const user = message.mentions.users.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply("*mention a user*");

    ///


    let point = db.get(`points_${message.guild.id}`);
    let ary = {
      user: `${user.id}`,
      points: 0
    };

    if (!point) {
      db.set(`points_${message.guild.id}`, [ary]);
    } else {
      let found = point.find(x => x.user === user.id);
      if (found) {
        found.points = 0; // Increment the points by 1
        point[point.indexOf(found)] = found;
      } else {
        point.push(ary); // If user not found, add them with 1 point
      }
      db.set(`points_${message.guild.id}`, point);


      await message.reply(`✅ ** تم تصفير نقاط الشخص بنجاح**`)



    }
  }

})



client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "set points")) {

    let high = client.config.high
    if (!message.member.roles.cache.some((role) => role.id === high))
      return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const args3 = parseInt(args[3]); // Parse the third argument as an integer

    const user = message.mentions.users.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply("*mention a user*");
    if (isNaN(args3)) return message.reply(`*the number was not placed successfully*`)
    ///ا


    let point = db.get(`points_${message.guild.id}`);
    let ary = {
      user: `${user.id}`,
      points: args3
    };

    if (!point) {
      db.set(`points_${message.guild.id}`, [ary]);
    } else {
      let found = point.find(x => x.user === user.id);
      if (found) {
        found.points = args3; // Increment the points by 1
        point[point.indexOf(found)] = found;
      } else {
        point.push(ary); // If user not found, add them with 1 point
      }
      db.set(`points_${message.guild.id}`, point);


      await message.reply(`** ✅ تم وضع عدد النقاط بنجاح **`)



    }
  }

})


///////////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "reset all")) {

    let high = client.config.high
    if (!message.member.roles.cache.some((role) => role.id === high))
      return;

    let data = db.get(`points_${message.guild.id}`)
    if (!data) return message.reply(`** No Found Data ! **`)
    if (data) db.delete(`points_${message.guild.id}`)
    return message.reply(`**✅ تم تصفير النقاط بنجاح **`)

  }
})



client.on('channelDelete', (channel) => {
  let chid = channel.id
  let data = db.get(`ownerticket_${chid}`)
  if (!data) return;
  if (data) db.delete(`ownerticket_${chid}`)

});



client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "help points")) {
    let high = client.config.high
    if (!message.member.roles.cache.some((role) => role.id === high)) return
    await message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(data.color)
          .setTitle("System Points Help")
          .setDescription(`
- ${prefix}points 
- ${prefix}set points
- ${prefix}reset
- ${prefix}leaderboard
- ${prefix}reset user
`)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          //.setTimestamp();
          //  .setFooter({text : ` S`})
          .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      ]
    })
  }
})




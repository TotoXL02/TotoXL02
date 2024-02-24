const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js')
const {  Modal, TextInputComponent } = require('discord.js');
const data = require('../../data/discount.js');

let transfer = client.config.transfer
let probot = client.config.probotid
let line = client.config.lineurl
let color = client.config.color
let title = client.config.title

//Buy Rare Roles
client.on("interactionCreate", async interaction => { 
  
  if(interaction.customId === "2roles"){
  let status = await db.get(`vipstatus_${interaction.guild.id}`)
    if(status === "Off" || !status)return interaction.reply({content:`** الرتب النادرة غير متوفرة حالياً  ..**`, ephemeral:true })
   let vale = interaction.values[0];
    if(vale === "1"){
  let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
      
  let price = client.config.viproleprice
        let finalprice = Math.floor(price *(20) / (19) + (1))
let roleid = client.config.viproleid
      if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
      
  await interaction.message.edit({content: `** **`, embeds:[], components:[]}).then(async c => {
    
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة نادرة")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  
]}).then(async last => {
///collocter 
const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price; 
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {    
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
  ]}).then(async kk => {   
interaction.member.roles.add(roleid).catch((err)=> {  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة نادرة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)

    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})

    log.send({files:[line]})
   })

    
   }).catch(async () => {
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });
    await last.delete()
    
  });
    ///
 })
   })
      }

if(vale === "2"){
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
  
  let price = client.config.price
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.roleid

  if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
  
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
  
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة نادرة")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  
]}).then(async last => {
  

///collocter 

const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price;

  
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {
    
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
  ]}).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة نادرة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)

    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})

    log.send({files:[line]})
   })

    
   }).catch(async () => {
            let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });
    await last.delete()
    
  })
 })
   })
}
  }})
const MESSAGES = {
    COMMANDS: {
      ADMIN: {
        CONFIG: {
          name: "configdb",
          aliases: ['configdb'],
          category: 'admin',
          description: "Modifier la base de données (prefix, welcomeMessage et logChannel)",
          cooldown: 3,
          usage: '<key> <value>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        EVAL: {
          name: "eval",
          aliases: ['eval'],
          category: 'admin',
          description: 'Tester un code javascript. Pour enregister un serveur, tapez client.emit("guildCreate", message.guild), Pour activer les niveaux, tapez client.emit("guildMemberAdd", message.member)',
          cooldown: 3,
          usage: '<code_to_test>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        RELOAD: {
          name: "reload",
          aliases: ['reload'],
          category: 'admin',
          description: "Relancer le bot.",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: true,
          args: false
        },
        DM: {
          name: "dm",
          aliases: [''],
          category: 'admin',
          description: "Envoyer un dm.",
          cooldown: 0,
          usage: '<@user> <message à envoyer>',
          isUserAdmin: true,
          permissions: false,
          args: true
        },
      },
      FUN: {
        EIGHTBALL: {
          name: "8ball",
          aliases: ['8', '8b'],
          category: 'fun',
          description: "Mystère et boule de gomme...",
          cooldown: 10,
          usage: "<question>",
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        RPS: {
          name: "rps",
          aliases: [''],
          category: 'fun',
          description: "Piere, feuille, ciseaux !",
          cooldown: 10,
          usage: "",
          isUserAdmin: false,
          permissions: false,
          args: false
        },
      },
      MISC: {
        HELP: {
          name: "help",
          aliases: ['help'],
          category: 'misc',
          description: "Renvoie une liste de commandes ou les informations sur une seule.",
          cooldown: 3,
          usage: '<command_name>',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        BOTINFO: {
          name: "botinfo",
          aliases: ['bi'],
          category: 'misc',
          description: "Renvoie les informations sur le bot.",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        SAY: {
          name: "say",
          aliases: ['repeat', 'rep'],
          category: 'misc',
          description: "Répéte le message d'un utilisateur.",
          cooldown: 10,
          usage: '<votre_message>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        STATS: {
          name: "stats",
          aliases: ['stats'],
          category: 'misc',
          description: "Renvoie des statistiques.",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        INVITE: {
          name: "invite", 
          aliases: ['invite'],
          category: 'misc',
          description: "Crée un lien pour inviter le bot dans votre serveur.",
          cooldown: 120,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        POLL: {
          name: "poll", 
          aliases: ['poll'],
          category: 'misc',
          description: "Faites des sondages caca",
          cooldown: 20,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
      },
      MODERATION: {
        BAN: {
          name: "ban",
          aliases: ['ban'],
          category: 'moderation',
          description: "Ban un utilisateur.",
          cooldown: 10,
          usage: '<@user> <raison>',
          isUserAdmin: true,
          permissions: true,
          args: true
        },
        KICK: {
          name: "kick",
          aliases: ['kick'],
          category: 'moderation',
          description: "Kick un utilisateur.",
          cooldown: 10,
          usage: '<@user> <raison>',
          isUserAdmin: true,
          permissions: true,
          args: true
        },
        LANGUAGE: {
          name: "language",
          aliases: ['lang'],
          category: 'moderation',
          description: "Changer de langue sur un serveur",
          cooldown: 10,
          usage: '.lang fr/en',
          isUserAdmin: false,
          permissions: true,
          args: false
        },
        VOTEKICK: {
          name: "votekick",
          aliases: ['vk'],
          category: "Vote pour kick un utilisateur.",
          cooldown: 0,
          usage: '@user',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        MUTE: {
          name: "mute",
          aliases: ['mute'],
          category: 'moderation',
          description: "Mute un utilisateur.",
          cooldown: 10,
          usage: '<@user> <time>',
          isUserAdmin: true,
          permissions: true,
          args: true
        },
        PRUNE: {
          name: "prune",
          aliases: ['prune'],
          category: 'moderation',
          description: "Purge un nombre de message spécifié sur un utilisateur spécifié.",
          cooldown: 10,
          usage: '<@user> <nbr_messages>',
          isUserAdmin: true,
          permissions: true,
          args: true
        },
        PURGE: {
          name: "purge",
          aliases: ['purge'],
          category: 'moderation',
          description: "Purge un nombre de message spécifié.",
          cooldown: 10,
          usage: '<nbr_messages>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        UNBAN: {
          name: "unban",
          aliases: ['unban'],
          category: 'moderation',
          description: "Unban un utilisateur.",
          cooldown: 10,
          usage: '<user_id>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        UNMUTE: {
          name: "unmute",
          aliases: ['unmute'],
          category: 'moderation',
          description: "Unmute un utilisateur.",
          cooldown: 10,
          usage: '<@user>',
          isUserAdmin: true,
          permissions: true,
          args: true
        },
      },
      MUSIQUE: {
        CLIP: {
          name: "clip",
          aliases: ['c'],
          description: "Joue un petit ''son'' dans un salon vocal",
          cooldown: 3,
          usage: '<name>',
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        NOWPLAYING: {
          name: "nowplaying",
          aliases: ['np'],
          description: "Montre le son joué actuellement",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        PLAY: {
          name: "play",
          aliases: ['p'],
          description: "Joue un son depuis YouTube ou Soundcloud",
          cooldown: 3,
          usage: '<YouTube URL | Nom de la video | Soundcloud URL>',
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        PLAYLIST: {
          name: "playlist",
          aliases: ['pl'],
          description: "Joue une playlist depuis YouTube.",
          cooldown: 3,
          usage: '<YouTube Playlist URL | Playlist Name>',
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        QUEUE: {
          name: "queue",
          aliases: ['q'],
          description: "Montre la file d'attente actuelle et le son joué actuellement.",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        REMOVE: {
          name: "remove",
          aliases: ['rm'],
          description: "Retire un son de la file d'attente.",
          cooldown: 3,
          usage: '<Queue Number>',
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        SEARCH: {
          name: "search",
          aliases: ['se'],
          description: "Recherche et affiche un résultat pour une viéo présice.",
          cooldown: 3,
          usage: '.search <Video Name>',
          isUserAdmin: false,
          permissions: false,
          args: true
        },
        SETUP: {
          name: "setup",
          aliases: ['st'],
          description: "Crée un salon renvoie une liste de toutes les commandes réactives et leurs descriptions.",
          cooldown: 3,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        SKIPTO: {
          name: "skipto",
          aliases: ['sk'],
          description: "Skip jusqu'au numéro du son de la file d'attente.",
          cooldown: 3,
          usage: '<Queue Number>',
          isUserAdmin: false,
          permissions: false,
          args: true
        }
      },
      REACTIONS: {
        ALLROLES: {
          name: "allroles",
          aliases: ['al'],
          description: "tkt",
          cooldown: 0,
          usage: '',
          isUserAdmin: true,
          permissions: true,
          args: false
        },
      },
      XP: {
        EXP: {
          name: "exp",
          aliases: ['exp'],
          category: 'xp',
          description: "Renvoie l'expérience de l'utilisateur.",
          cooldown: 10,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        LEVEL: {
          name: "level",
          aliases: ['level'],
          category: 'xp',
          description: "Renvoie le niveau de l'utilisateur.",
          cooldown: 10,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
        ADDXP: {
          name: "addxp",
          aliases: ['addexperience', 'addexp'],
          category: 'xp',
          description: "Ajoute de l'expérience de l'utilisateur.",
          cooldown: 10,
          usage: '<user> <amount_of_experience>',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        REMOVEXP: {
          name: "removexp",
          aliases: ['removeexperience', 'remexp'],
          category: 'xp',
          description: "Enleve de l'expérience de l'utilisateur.",
          cooldown: 10,
          usage: '<user> <amount_of_experience_',
          isUserAdmin: false,
          permissions: true,
          args: true
        },
        LEADERBOARD: {
          name: "leaderboard",
          aliases: ['lead', 'classement', 'class'],
          category: 'xp',
          description: "Affiche le clasement (Top 3) des membres sur le serveur.",
          cooldown: 30,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false
        },
      },
      REEDIT: {
        HMMM: {
          name: "hmmm",
          aliases: ['hmmm'],
          category: 'reedit',
          description: "Envoie un hmmm depuis le subReedit :/r/hmmm.",
          cooldown: 10,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false,
        },
        MEME: {
          name: "meme",
          aliases: ['meme'],
          category: 'reedit',
          description: "Envoie un meme depuis les subReedits me_irl, dankmeme et meme.",
          cooldown: 10,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false,
        },
        ANIME: {
          name: "anime",
          aliases: ['anime'],
          category: 'reedit',
          description: "Envoie un meme depuis les subReedits me_irl, dankmeme et meme.",
          cooldown: 10,
          usage: '',
          isUserAdmin: false,
          permissions: false,
          args: false,
        },
      },
      STATS: {
        FORTNITE: {
          name: "fortnite",
          aliases: ['ftn'],
          category: 'stats',
          description: "Affiche les stats d'un joueur ou la boutique du jour.",
          cooldown: 10,
          usage: "<pseudo [pc,xb1,psn] | store>",
          isUserAdmin: false,
          permissions: false,
          args: true,
        },
        APEX: {
          name: "apex",
          aliases: ['apx'],
          category: 'stats',
          description: "Affiche les stats d'un joueur sur Apex Legends",
          cooldown: 10,
          usage: "<pseudo [pc,xb1,psn]>",
          isUserAdmin: false,
          permissions: false,
          args: true,
        },
      }
    }
}
  
exports.MESSAGES = MESSAGES
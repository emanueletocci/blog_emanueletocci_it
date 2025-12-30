---
title: "Guida completa all'installazione di Proxmox VE su hardware x86 [TUTORIAL]"
date: 2025-12-30T10:00:00.000Z
coverImage: /images/articles/guida_installazione_proxmox/cover.jpg

tags:
- homelab
- proxmox
- linux
---

Oggi parliamo di come trasformare un vecchio computer o un mini-PC in un potente server domestico grazie a ***Proxmox Virtual Environment (VE)***.

Proxmox è una piattaforma **open-source** basata su Debian che permette di gestire macchine virtuali (VM) e container (LXC) con estrema facilità. Se avete un vecchio PC x86 che prende polvere, questa è la guida perfetta per dargli nuova vita e iniziare il vostro viaggio nel mondo dell'**Homelab**.

In questa guida vedremo passo dopo passo come installarlo, partendo da zero fino al primo accesso all'interfaccia web.

![Logo Proxmox](https://placehold.co/800x400/png?text=Proxmox+VE+Setup)

## Prerequisiti

Prima di iniziare, assicurati di avere:

1. Un **PC x86 a 64 bit** (processore Intel o AMD).
2. Almeno **4GB di RAM** (8GB o più sono consigliati).
3. Una **chiavetta USB** da almeno 4GB.
4. Un monitor e una tastiera (servono solo per l'installazione iniziale).
5. Cavo Ethernet collegato al router.

## Preparazione della chiavetta USB

Per prima cosa dobbiamo scaricare l'immagine di installazione e scriverla sulla chiavetta USB.

1. Vai sul [sito ufficiale di Proxmox](https://www.proxmox.com/en/downloads) e scarica l'ISO di **Proxmox VE**.
2. Scarica un programma per scrivere l'ISO su USB, come **Rufus** (su Windows) o **BalenaEtcher** (Windows/Mac/Linux).
3. Inserisci la chiavetta USB nel tuo PC principale.
4. Apri Rufus/Etcher, seleziona l'ISO di Proxmox appena scaricata e avvia la scrittura.

*Attenzione: questa operazione cancellerà tutti i dati sulla chiavetta USB.*

## Avvio e BIOS

Ora passiamo al computer "target" dove vogliamo installare Proxmox.

1. Inserisci la chiavetta USB.
2. Accendi il PC e premi ripetutamente il tasto per entrare nel **BIOS/UEFI** (solitamente CANC, F2, F10 o F12).
3. Nel menu del BIOS, cerca la voce **Virtualization Technology** (Intel VT-x o AMD-V) e assicurati che sia **ABILITATA**.
4. Vai nella sezione **Boot** e imposta la chiavetta USB come primo dispositivo di avvio.
5. Salva ed esci.

## L'installazione passo passo

Se hai fatto tutto correttamente, vedrai la schermata di benvenuto di Proxmox.

![Schermata Boot Proxmox](https://placehold.co/800x400/png?text=Install+Proxmox+VE)

1. Seleziona **"Install Proxmox VE"** e premi Invio.
2. **EULA:** Ti verrà chiesto di accettare la licenza. Clicca su "I agree".
3. **Target Harddisk:** Seleziona il disco su cui vuoi installare Proxmox.
    - *Nota bene:* L'intero disco verrà formattato. Se hai più dischi, assicurati di scegliere quello giusto. Clicca su "Next".
4. **Country, Time Zone:**
    - Country: Italy
    - Time Zone: Europe/Rome
    - Keyboard Layout: Italian
    - Clicca su "Next".
5. **Password:** Imposta la password per l'utente **root**.
    - *Importante:* Scrivitela! Ti servirà per accedere. Inserisci anche un'email valida (serve per le notifiche di sistema). Clicca su "Next".
6. **Network Configuration:** Questa è la parte più delicata.
    - **Management Interface:** Seleziona la tua scheda di rete.
    - **Hostname:** Dai un nome al server (es. `pve.local` o `proxmox.home`).
    - **IP Address:** Assegna un IP statico (es. `192.168.1.100`). Assicurati che sia un IP libero nella tua rete domestica.
    - **Gateway:** L'IP del tuo router (solitamente `192.168.1.1`).
    - **DNS Server:** Puoi usare l'IP del router o DNS pubblici come `8.8.8.8` (Google) o `1.1.1.1` (Cloudflare).
    - Clicca su "Next".

Controlla il riepilogo finale e clicca su **Install**. L'installazione durerà pochi minuti. Al termine, il sistema si riavvierà automaticamente.

*Ricordati di rimuovere la chiavetta USB al riavvio!*

## Primo Accesso

Dopo il riavvio, vedrai una schermata nera con del testo bianco. Non devi fare nulla lì. Cerca le ultime righe, ti diranno qualcosa come:

`Please use your web browser to configure this server - connect to:`
`https://192.168.1.100:8006/`

1. Torna al tuo PC principale.
2. Apri il browser (Chrome, Firefox, ecc.).
3. Nella barra degli indirizzi scrivi l'URL mostrato sul server: `https://TUO_IP:8006`.
4. **Attenzione all'errore di sicurezza:** Il browser ti dirà che la connessione non è privata. È normale (perché il certificato SSL è auto-generato).
    - Clicca su **Avanzate** -> **Procedi** (o "Accetta il rischio e continua").

![Interfaccia Web](https://placehold.co/800x400/png?text=Web+Interface+Login)

## Login e Configurazione Finale

Ti troverai davanti alla schermata di login.

- **Username:** `root`
- **Password:** Quella che hai scelto durante l'installazione.
- **Realm:** Linux PAM standard authentication.
- **Language:** Italian.

Una volta dentro, vedrai un avviso "No valid subscription". Ignoralo cliccando su OK (Proxmox è gratuito, la sottoscrizione serve per il supporto enterprise).

### Aggiornare i Repository (Opzionale ma consigliato)

Di default, Proxmox cerca gli aggiornamenti nel canale "Enterprise" (a pagamento). Per aggiornare la versione gratuita:

1. Seleziona il tuo nodo (il nome del server) nella colonna di sinistra.
2. Vai su **Updates** -> **Repositories**.
3. Disabilita il repository "Enterprise".
4. Aggiungi il repository "No-Subscription".
5. Ora puoi andare su **Updates** e cliccare **Refresh** e poi **Upgrade** per avere l'ultima versione del sistema.

## Considerazioni finali

Congratulazioni! Hai appena installato il tuo hypervisor. Ora il tuo vecchio hardware è un server pronto a ospitare decine di macchine virtuali, server Minecraft, Home Assistant, Pi-Hole e qualsiasi altro servizio tu voglia sperimentare.

L'interfaccia di Proxmox è potente ma intuitiva. Prenditi del tempo per esplorare le opzioni di creazione VM (Create VM) e Container (Create CT). Buon divertimento con il tuo nuovo Homelab!

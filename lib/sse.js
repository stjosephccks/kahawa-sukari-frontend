import {EventEmitter} from "events";

const  eventEmitter = new EventEmitter();
const clients =  new Set();


export function broadCastEvent( event,data){
    const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
    clients.forEach((res)=>{
        try{
            res.write(message)
        }catch(error){
            console.error("Error broadcasting event:",error)
        }
    })
}

export default async function handler(req,res){
    res.setHeader("Content-Type","text/event-stream")
    res.setHeader("Cache-Control","no-cache")
    res.setHeader("Connection","keep-alive")
    res.setHeader("Content-Encoding","none")

    clients.add(res)
    res.write('event: connected\ndata: true\n\n')

    req.on("close",()=>{
        clients.delete(res)
        res.end();
    });

    const keepAlive = setInterval(()=>{
        res.write("data: keep-alive\n\n")
    },30000);

    req.on("close",()=>{
        clearInterval(keepAlive)
        clients.delete(res)
        res.end();
    });
}



async function setupChangeStreams() {
    try {
      await mongooseConnect();
      const db = mongoose.connection;
  
      // Watch announcements collection
      const announcements = db.collection('announcements');
      const announcementsStream = announcements.watch([], { fullDocument: 'updateLookup' });
      announcementsStream.on('change', (change) => {
        broadCastEvent('announcements', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      // Watch events collection
      const events = db.collection('events');
      const eventsStream = events.watch([], { fullDocument: 'updateLookup' });
      eventsStream.on('change', (change) => {
        broadCastEvent('events', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      // Watch sundays collection
      const sundays = db.collection('sundays');
      const sundaysStream = sundays.watch([], { fullDocument: 'updateLookup' });
      sundaysStream.on('change', (change) => {
        broadCastEvent('sundays', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      // Watch liturgical collection
      const liturgical = db.collection('liturgical');
      const liturgicalStream = liturgical.watch([], { fullDocument: 'updateLookup' });
      liturgicalStream.on('change', (change) => {
        broadCastEvent('liturgical', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      // Watch bulletins collection
      const bulletins = db.collection('bulletins');
      const bulletinsStream = bulletins.watch([], { fullDocument: 'updateLookup' });
      bulletinsStream.on('change', (change) => {
        broadCastEvent('bulletins', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      // Watch announcementdocs collection
      const announcementDocs = db.collection('announcementdocs');
      const announcementDocsStream = announcementDocs.watch([], { fullDocument: 'updateLookup' });
      announcementDocsStream.on('change', (change) => {
        broadCastEvent('announcementdocs', { 
          operationType: change.operationType,
          document: change.fullDocument 
        });
      });
  
      console.log('SSE: MongoDB change streams initialized');
    } catch (error) {
      console.error('SSE: Error setting up change streams:', error);
      // Retry after delay
      setTimeout(setupChangeStreams, 5000);
    }
  }
  
  // Don't forget to call setupChangeStreams when your server starts
  if (process.env.NODE_ENV !== 'test') {
    setupChangeStreams();
  }
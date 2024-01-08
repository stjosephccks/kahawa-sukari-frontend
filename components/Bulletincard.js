
import Link from 'next/link';

function BulletinCard({bulletin}) {
  const titleSlug = decodeURI(bulletin.title)  

 
  return (
    <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg">
      
      <Link href={`/welcome/bulletin/${bulletin._id}`}>
        <img
        className="w-full h-64 object-cover"
        src={bulletin.images[0]}
        alt={bulletin.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{bulletin.title}</div>
        <p className="text-gray-700 text-base">{bulletin.description}</p>
      </div>
      <span className='px-6 mb-6'>
    <Link className='underline' href={`/welcome/bulletin/${bulletin._id}`}>Read More&#10146;</Link>
    </span>

     
    </Link>
   
  </div>

  )
}

export default BulletinCard
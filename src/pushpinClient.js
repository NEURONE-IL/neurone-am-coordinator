import grip from 'grip'
import dotenv from 'dotenv'
dotenv.config();


const pushpin = process.env.PUSHPIN_URL

// Init pushpin for metric delivery
const pub = new grip.GripPubControl(
  {
    'control_uri': pushpin || 'http://localhost:5561'
  }
)

export default pub
import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe victory gesture ✌️
const pointLeftDescription = new GestureDescription('Point Left');

// thumb:
pointLeftDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
pointLeftDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
pointLeftDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
pointLeftDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

// index:
pointLeftDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointLeftDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
pointLeftDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
pointLeftDescription.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.2);

// ring:
pointLeftDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointLeftDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.2);

// pinky:
pointLeftDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pointLeftDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointLeftDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.2);

// give additional weight to index and ring fingers
pointLeftDescription.setWeight(Finger.Index, 2);
pointLeftDescription.setWeight(Finger.Thumb, 2);

export default pointLeftDescription;

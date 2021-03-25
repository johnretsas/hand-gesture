import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe victory gesture ✌️
const pointRightDescription = new GestureDescription('Point Right');

// thumb:
pointRightDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
pointRightDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
pointRightDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
pointRightDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

// index:
pointRightDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointRightDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// middle:
pointRightDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.2);

// ring:
pointRightDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
pointRightDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pointRightDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
pointRightDescription.setWeight(Finger.Index, 2);
pointRightDescription.setWeight(Finger.Thumb, 2);

export default pointRightDescription;

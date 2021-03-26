import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe victory gesture ✌️
const pointRightDescription = new GestureDescription('Down Left');

// thumb:
pointRightDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
pointRightDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// index:
pointRightDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointRightDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
pointRightDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);

// middle:
pointRightDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
pointRightDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);

// ring:
pointRightDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
pointRightDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);

// pinky:
pointRightDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pointRightDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pointRightDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
pointRightDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);

// give additional weight to index and ring fingers
pointRightDescription.setWeight(Finger.Index, 2);
pointRightDescription.setWeight(Finger.Thumb, 2);

export default pointRightDescription;

import { DeepAR } from 'deepar';
import deeparWasm from 'deepar/wasm/deepar.wasm';
import footTrackingModel from 'deepar/models/foot/foot-tracker-android.bin';
import segmentationModel from 'deepar/models/segmentation/segmentation-160x160-opt.bin';


const canvas = document.getElementById('deepar-canvas');
const deepAR = new DeepAR({
    licenseKey: 'your_license_key_here',
    canvas: canvas,
    segmentationConfig: {
        modelPath: segmentationModel
    },
    deeparWasmPath: deeparWasm,
    callbacks: {
        onInitialize: () => {
            deepAR.startVideo(true);
        }
    }
    
});

deepAR.downloadFootTrackingModel(footTrackingModel);

const effects = [
    './effects/Shoe_PBR'
];
let currentEffectIdx = -1;
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    currentEffectIdx = (currentEffectIdx + 1) % effects.length;
    const effect = effects[currentEffectIdx];
    deepAR.switchEffect(0, "slot", effect);
});



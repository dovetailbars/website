import ClaptonData from './clapton';
import CoventGardenData from './covent-garden';

const data = [
    { barId: 'clapton', data: ClaptonData },
    { barId: 'covent-garden', data: CoventGardenData },
];

export function getBarData(barId: string) {
    const result = data.find(bar => bar.barId === barId);
    if (!result) {
        return null;
    }

    return result.data;
}
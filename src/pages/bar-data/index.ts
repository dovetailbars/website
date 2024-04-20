import ClaptonData from './clapton';
import CoventGardenData from './covent-garden';

const data = [
    { barId: 'clapton', data: ClaptonData },
    { barId: 'covent-garden', data: CoventGardenData },
];

export function getBarData(barId: string): BarData | null {
    const result = data.find(bar => bar.barId === barId);
    return result?.data;
}
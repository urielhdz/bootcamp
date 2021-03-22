import { filterData, sortData } from '../src/data.js';
import mockingData from '../src/data/athletes/athletes.js';

describe('filter', () => {
  it('returns an object with an ahtletes array', () => {
    const result = filterData(mockingData);
    expect(Array.isArray(result.athletes)).toBe(true);
  });

  it('filters by country', () => {
    expect(filterData(mockingData, { team: 'Italy' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ team: 'Italy' }),
      ]),
    );
  });

  it('filters by gender', () => {
    expect(filterData(mockingData, { gender: 'F' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ gender: 'F' }),
      ]),
    );
  });

  it('filters by name', () => {
    expect(filterData(mockingData, { name: 'Giovanni Abagnale' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Giovanni Abagnale' }),
      ]),
    );
  });

  it('filters by sport', () => {
    expect(filterData(mockingData, { sport: 'Rowing' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ sport: 'Rowing' }),
      ]),
    );
  });

  it('filters by event', () => {
    expect(filterData(mockingData, { event: 'Gymnastics Men\'s Rings' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ event: 'Gymnastics Men\'s Rings' }),
      ]),
    );
  });

  it('filters by medal', () => {
    expect(filterData(mockingData, { medal: 'Gold' }).athletes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ medal: 'Gold' }),
      ]),
    );
  });
});


describe('sorts data', () => {
  it('returns an object with an ahtletes array', () => {
    const result = sortData(mockingData, 'name', 'asc');
    expect(Array.isArray(result.athletes)).toBe(true);
  });

  it('sorts by name', () => {
    const { athletes } = sortData(mockingData, 'name', 'asc');
    expect(athletes[0].name).toMatch(new RegExp('^[Aa]'));
  });

  it('sorts by name desc', () => {
    const { athletes } = sortData(mockingData, 'name', 'desc');
    expect(athletes[0].name).toMatch(new RegExp('^[Zz]'));
  });

  it('sorts by gender', () => {
    const { athletes } = sortData(mockingData, 'gender', 'asc');
    expect(athletes[0].gender).toMatch(new RegExp('^[Ff]'));
  });

  it('sorts by gender desc', () => {
    const { athletes } = sortData(mockingData, 'gender', 'desc');
    expect(athletes[0].gender).toMatch(new RegExp('^[Mm]'));
  });

  it('sorts by country', () => {
    const { athletes } = sortData(mockingData, 'team', 'asc');
    expect(athletes[0].team).toMatch(new RegExp('^[Aa]'));
  });

  it('sorts by country desc', () => {
    const { athletes } = sortData(mockingData, 'team', 'desc');
    expect(athletes[0].team).toMatch(new RegExp('^[Vv]'));
  });
});

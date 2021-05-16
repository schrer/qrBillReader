import {parse, QrParserResult} from '../util/bill-parser'
import {R1BillContent} from '../util/bill-datatypes'

test('injects an R1 compatible string to check the parser functionality', () => {
    const r1String = "_R1-AT0_DEMO-CASH-BOX524_366596_2015-12-17T11:23:44_0,00_0,00_3,64_-2,60_1,79_VFJB_47be737cb1f6d1f1_ZvNxJw6a1A4=_J7YC28zquHfHzMpx02TqElbXOTSgXQu5JAA9Xu1Xzzu5p8eUYT+sgmyhzRps5nYyEp5Yh8ATIa9130zmuiACHw=="
  
    const r1Result = parse(r1String)
    expect(r1Result).toBeInstanceOf(QrParserResult);
    expect(r1Result.rawContent).toBe(r1String);
    expect(r1Result.parsed).toBeTruthy();
    expect(r1Result.parsedContent).toBeDefined();
  });
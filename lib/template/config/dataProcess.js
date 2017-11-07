import { forEach, has, isEmpty } from 'lodash';

export default (dishesArr, designArr, dishesLeft = {}, files = {}) => {
    let dishesMap = {};
    forEach(dishesArr, type => {
        forEach(type.Dishes, dish => {
            if (dishesLeft[`${dish.ch_dishno}`] && has(dishesLeft[`${dish.ch_dishno}`], 'WarnNum')) {
                dish['left'] = dishesLeft[`${dish.ch_dishno}`].WarnNum;
            }
            dishesMap[dish.dish_guid] = dish;
        });
    });
    forEach(designArr, (category, index) => {
        forEach(category.pages, page => {
            if (page.items && page.items.length) {
                forEach(page.items, good => {
                    !!good.id && (good.dishData = dishesMap[good.id]);
                });
            }
        });
    });
    forEach(dishesArr, type => {
        forEach(designArr, cate => {
            if (cate.pages && cate.pages.length) {
                if (type['TypeGuid'] === cate['id']) {
                    !isEmpty(cate['pages']) && (type['pages'] = cate['pages']);
                }
            }
        });
    });
    return dishesArr.filter(type => type.pages && type.pages.length);
}
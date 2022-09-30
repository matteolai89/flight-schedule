import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @param filteredCount
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string, filteredCount: any): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    let newItems = items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
    filteredCount.count = newItems.length;

    return newItems;
  }
}

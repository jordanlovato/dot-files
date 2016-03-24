function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var NUCLIDE_CONFIG_SCOPE = 'nuclide.';

function formatKeyPath(keyPath) {
  return '' + NUCLIDE_CONFIG_SCOPE + keyPath;
}

module.exports = {
  /*
   * Returns the value of a setting for a Nuclide feature key. Takes and returns the same types as
   * `atom.config.get` exception `keyPath` is not optional. To get the entire config object, use
   * `atom.config.get`.
   */
  get: function get(keyPath, options) {
    var _atom$config;

    return (_atom$config = atom.config).get.apply(_atom$config, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  },

  /*
   * Gets the schema of a setting for a Nuclide feature key. Takes and returns the same types as
   * `atom.config.getSchema`.
   */
  getSchema: function getSchema(keyPath) {
    return atom.config.getSchema(formatKeyPath(keyPath));
  },

  /*
   * Takes and returns the same types as `atom.config.observe` except `keyPath` is not optional.
   * To observe changes on the entire config, use `atom.config.observe`.
   */
  observe: function observe(keyPath, optionsOrCallback, callback) {
    var _atom$config2;

    return (_atom$config2 = atom.config).observe.apply(_atom$config2, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  },

  /*
   * Takes and returns the same types as `atom.config.onDidChange` except `keyPath` is not optional.
   * To listen to changes on all key paths, use `atom.config.onDidChange`.
   */
  onDidChange: function onDidChange(keyPath, optionsOrCallback, callback) {
    var _atom$config3;

    return (_atom$config3 = atom.config).onDidChange.apply(_atom$config3, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  },

  /*
   * Sets the value of a setting for a Nuclide feature key. Takes and returns the same types as
   * `atom.config.set`.
   */
  set: function set(keyPath, value, options) {
    var _atom$config4;

    return (_atom$config4 = atom.config).set.apply(_atom$config4, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  },

  /*
   * Sets the schema of a setting for a Nuclide feature key. Takes and returns the same types as
   * `atom.config.setSchema`.
   */
  setSchema: function setSchema(keyPath, schema) {
    var _atom$config5;

    return (_atom$config5 = atom.config).setSchema.apply(_atom$config5, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  },

  /*
   * Restores a setting for a Nuclide feature key to its default value. Takes and returns the same
   * types as `atom.config.set`.
   */
  unset: function unset(keyPath, options) {
    var _atom$config6;

    return (_atom$config6 = atom.config).unset.apply(_atom$config6, [formatKeyPath(keyPath)].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVdBLElBQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDOztBQUV4QyxTQUFTLGFBQWEsQ0FBQyxPQUFlLEVBQVU7QUFDOUMsY0FBVSxvQkFBb0IsR0FBRyxPQUFPLENBQUc7Q0FDNUM7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRzs7Ozs7O0FBTWYsS0FBRyxFQUFBLGFBQ0QsT0FBZSxFQUNmLE9BSUMsRUFDTTs7O0FBQ1AsV0FBTyxnQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLEdBQUcsTUFBQSxnQkFBQyxhQUFhLENBQUMsT0FBTyxDQUFDLDRCQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztHQUM3Rjs7Ozs7O0FBTUQsV0FBUyxFQUFBLG1CQUNQLE9BQWUsRUFDSTtBQUNuQixXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQ3REOzs7Ozs7QUFNRCxTQUFPLEVBQUEsaUJBQ0wsT0FBZSxFQUNmLGlCQUFrRCxFQUNsRCxRQUErQixFQUNsQjs7O0FBQ2IsV0FBTyxpQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLE9BQU8sTUFBQSxpQkFBQyxhQUFhLENBQUMsT0FBTyxDQUFDLDRCQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztHQUNqRzs7Ozs7O0FBTUQsYUFBVyxFQUFBLHFCQUNULE9BQWUsRUFDZixpQkFBcUQsRUFDckQsUUFBa0MsRUFDckI7OztBQUNiLFdBQU8saUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxXQUFXLE1BQUEsaUJBQzVCLGFBQWEsQ0FBQyxPQUFPLENBQUMsNEJBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQzVDLENBQUM7R0FDSDs7Ozs7O0FBTUQsS0FBRyxFQUFBLGFBQ0QsT0FBZSxFQUNmLEtBQWEsRUFDYixPQUdDLEVBQ1E7OztBQUNULFdBQU8saUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLE1BQUEsaUJBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyw0QkFBSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7R0FDN0Y7Ozs7OztBQU1ELFdBQVMsRUFBQSxtQkFDUCxPQUFlLEVBQ2YsTUFBYyxFQUNSOzs7QUFDTixXQUFPLGlCQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsU0FBUyxNQUFBLGlCQUMxQixhQUFhLENBQUMsT0FBTyxDQUFDLDRCQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUM1QyxDQUFDO0dBQ0g7Ozs7OztBQU1ELE9BQUssRUFBQSxlQUNILE9BQWUsRUFDZixPQUdDLEVBQ0s7OztBQUNOLFdBQU8saUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxLQUFLLE1BQUEsaUJBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyw0QkFBSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7R0FDL0Y7Q0FDRixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5jb25zdCBOVUNMSURFX0NPTkZJR19TQ09QRSA9ICdudWNsaWRlLic7XG5cbmZ1bmN0aW9uIGZvcm1hdEtleVBhdGgoa2V5UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke05VQ0xJREVfQ09ORklHX1NDT1BFfSR7a2V5UGF0aH1gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLypcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzZXR0aW5nIGZvciBhIE51Y2xpZGUgZmVhdHVyZSBrZXkuIFRha2VzIGFuZCByZXR1cm5zIHRoZSBzYW1lIHR5cGVzIGFzXG4gICAqIGBhdG9tLmNvbmZpZy5nZXRgIGV4Y2VwdGlvbiBga2V5UGF0aGAgaXMgbm90IG9wdGlvbmFsLiBUbyBnZXQgdGhlIGVudGlyZSBjb25maWcgb2JqZWN0LCB1c2VcbiAgICogYGF0b20uY29uZmlnLmdldGAuXG4gICAqL1xuICBnZXQoXG4gICAga2V5UGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBleGNsdWRlU291cmNlcz86IEFycmF5PHN0cmluZz47XG4gICAgICBzb3VyY2VzPzogQXJyYXk8c3RyaW5nPjtcbiAgICAgIHNjb3BlPzogT2JqZWN0O1xuICAgIH1cbiAgKTogbWl4ZWQge1xuICAgIHJldHVybiBhdG9tLmNvbmZpZy5nZXQoZm9ybWF0S2V5UGF0aChrZXlQYXRoKSwgLi4uQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH0sXG5cbiAgLypcbiAgICogR2V0cyB0aGUgc2NoZW1hIG9mIGEgc2V0dGluZyBmb3IgYSBOdWNsaWRlIGZlYXR1cmUga2V5LiBUYWtlcyBhbmQgcmV0dXJucyB0aGUgc2FtZSB0eXBlcyBhc1xuICAgKiBgYXRvbS5jb25maWcuZ2V0U2NoZW1hYC5cbiAgICovXG4gIGdldFNjaGVtYShcbiAgICBrZXlQYXRoOiBzdHJpbmdcbiAgKTogYXRvbSRDb25maWdTY2hlbWEge1xuICAgIHJldHVybiBhdG9tLmNvbmZpZy5nZXRTY2hlbWEoZm9ybWF0S2V5UGF0aChrZXlQYXRoKSk7XG4gIH0sXG5cbiAgLypcbiAgICogVGFrZXMgYW5kIHJldHVybnMgdGhlIHNhbWUgdHlwZXMgYXMgYGF0b20uY29uZmlnLm9ic2VydmVgIGV4Y2VwdCBga2V5UGF0aGAgaXMgbm90IG9wdGlvbmFsLlxuICAgKiBUbyBvYnNlcnZlIGNoYW5nZXMgb24gdGhlIGVudGlyZSBjb25maWcsIHVzZSBgYXRvbS5jb25maWcub2JzZXJ2ZWAuXG4gICAqL1xuICBvYnNlcnZlKFxuICAgIGtleVBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zT3JDYWxsYmFjazogKE9iamVjdCB8ICh2YWx1ZTogYW55KSA9PiB2b2lkKSxcbiAgICBjYWxsYmFjaz86ICh2YWx1ZTogYW55KSA9PiB2b2lkXG4gICk6IElEaXNwb3NhYmxlIHtcbiAgICByZXR1cm4gYXRvbS5jb25maWcub2JzZXJ2ZShmb3JtYXRLZXlQYXRoKGtleVBhdGgpLCAuLi5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfSxcblxuICAvKlxuICAgKiBUYWtlcyBhbmQgcmV0dXJucyB0aGUgc2FtZSB0eXBlcyBhcyBgYXRvbS5jb25maWcub25EaWRDaGFuZ2VgIGV4Y2VwdCBga2V5UGF0aGAgaXMgbm90IG9wdGlvbmFsLlxuICAgKiBUbyBsaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwga2V5IHBhdGhzLCB1c2UgYGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlYC5cbiAgICovXG4gIG9uRGlkQ2hhbmdlKFxuICAgIGtleVBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zT3JDYWxsYmFjazogKE9iamVjdCB8IChldmVudDogT2JqZWN0KSA9PiB2b2lkKSxcbiAgICBjYWxsYmFjaz86IChldmVudDogT2JqZWN0KSA9PiB2b2lkXG4gICk6IElEaXNwb3NhYmxlIHtcbiAgICByZXR1cm4gYXRvbS5jb25maWcub25EaWRDaGFuZ2UoXG4gICAgICBmb3JtYXRLZXlQYXRoKGtleVBhdGgpLFxuICAgICAgLi4uQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICk7XG4gIH0sXG5cbiAgLypcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzZXR0aW5nIGZvciBhIE51Y2xpZGUgZmVhdHVyZSBrZXkuIFRha2VzIGFuZCByZXR1cm5zIHRoZSBzYW1lIHR5cGVzIGFzXG4gICAqIGBhdG9tLmNvbmZpZy5zZXRgLlxuICAgKi9cbiAgc2V0KFxuICAgIGtleVBhdGg6IHN0cmluZyxcbiAgICB2YWx1ZTogP21peGVkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBzY29wZVNlbGVjdG9yPzogc3RyaW5nLFxuICAgICAgc291cmNlPzogc3RyaW5nLFxuICAgIH1cbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGF0b20uY29uZmlnLnNldChmb3JtYXRLZXlQYXRoKGtleVBhdGgpLCAuLi5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfSxcblxuICAvKlxuICAgKiBTZXRzIHRoZSBzY2hlbWEgb2YgYSBzZXR0aW5nIGZvciBhIE51Y2xpZGUgZmVhdHVyZSBrZXkuIFRha2VzIGFuZCByZXR1cm5zIHRoZSBzYW1lIHR5cGVzIGFzXG4gICAqIGBhdG9tLmNvbmZpZy5zZXRTY2hlbWFgLlxuICAgKi9cbiAgc2V0U2NoZW1hKFxuICAgIGtleVBhdGg6IHN0cmluZyxcbiAgICBzY2hlbWE6IE9iamVjdFxuICApOiB2b2lkIHtcbiAgICByZXR1cm4gYXRvbS5jb25maWcuc2V0U2NoZW1hKFxuICAgICAgZm9ybWF0S2V5UGF0aChrZXlQYXRoKSxcbiAgICAgIC4uLkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICApO1xuICB9LFxuXG4gIC8qXG4gICAqIFJlc3RvcmVzIGEgc2V0dGluZyBmb3IgYSBOdWNsaWRlIGZlYXR1cmUga2V5IHRvIGl0cyBkZWZhdWx0IHZhbHVlLiBUYWtlcyBhbmQgcmV0dXJucyB0aGUgc2FtZVxuICAgKiB0eXBlcyBhcyBgYXRvbS5jb25maWcuc2V0YC5cbiAgICovXG4gIHVuc2V0KFxuICAgIGtleVBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgc2NvcGVTZWxlY3Rvcj86IHN0cmluZyxcbiAgICAgIHNvdXJjZT86IHN0cmluZyxcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIHJldHVybiBhdG9tLmNvbmZpZy51bnNldChmb3JtYXRLZXlQYXRoKGtleVBhdGgpLCAuLi5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfSxcbn07XG4iXX0=
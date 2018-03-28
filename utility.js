function get_range(data, attr) {
	// assumes data is an array of objects
	var values = [];
	for (var i=0; i < data.length; i++) {
		values.push(data[i][attr]);
	}
	var min_val = Math.min(...values);
	var max_val = Math.max(...values);
	return [min_val, max_val];
}
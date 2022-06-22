# UFO sightings

By utilizing spome simple HTML, CSS and JavaScript we are able to construct a user friendly and interactive webpage that can filter a large data set regarding multiple attributes of UFO sightings such as their location, date, duration and additional comments.

## Using the site

Our dynamic filters are set to update each and every time there is a change made. This is done through the use of D3 (Data-Driven Documents) which is a JavaScript library that produces sophisticated graphics in an HTML webpage. Using the input elements on our webpage we call a function 'updateFilters' on each 'change' of the input element.

![Capture](https://user-images.githubusercontent.com/15967377/175043044-a127fef6-3555-471c-8b06-79cf7d45a4fe.PNG)

```
d3.selectAll('input').on('change', updateFilters);
```

## Summary

One drawback of the current design is that you cannot search for keywords that may appear in comments to better group potentially related sightings.

A few features that I would suggest be put on the sort list are as follows:

- Drop down options available in the shape input element rather than a raw text input. This would allow users to get a quick idea of what sort of shapes are reported.
- Sorting options for each field to would allow users to combine the power of filtering and sorting all in one table. 

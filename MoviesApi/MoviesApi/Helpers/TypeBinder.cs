using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;

namespace MoviesApi.Helpers
{
    public class TypeBinder<T> : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var propertyName= bindingContext.ModelName;
            var value= bindingContext.ValueProvider.GetValue(propertyName);

            if(value == ValueProviderResult.None)
            {
                return Task.CompletedTask;
            }
            else
            {
                //could throw error
                try
                {
                    var deserializedValues = JsonConvert.DeserializeObject<T>(value.FirstValue);
                    bindingContext.Result = ModelBindingResult.Success(deserializedValues);
                }
                //if trow error show this error message
                catch
                {
                    bindingContext.ModelState.TryAddModelError(propertyName, "The given value is not of the correct Type");
                }
                return Task.CompletedTask;
            }
        }
    }
}

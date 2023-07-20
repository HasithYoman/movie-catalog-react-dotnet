/*using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;
using MoviesApi.Controllers;
using MoviesApi.Filters;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
//private readonly ILogger<Program> logger;
//cha

// Add logging
builder.Logging.AddConsole();


//cha
//var app = builder.Build();
//ILogger<Program> logger1 = app.Services.GetService<ILogger<Program>>();

//var wetherForecastController= new WeatherForecastController();
//wetherForecastController.Get();

//var genresController = new GenresController(new InMemoryRepository(new Logger()));

// Add services to the container.

builder.Services.AddControllers(options =>{ 
    options.Filters.Add(typeof(MyExceptionFilter));
    });
//builder.Services.AddSingleton<IRepository, InMemoryRepository>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();


////tempory
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();




app.Run(async (context) =>
{
    await context.Response.WriteAsync("I'm short-circuiting the pipeline");

    var endpoint = context.GetEndpoint();
    if (endpoint != null)
    {
        await endpoint.RequestDelegate(context);
    }
});


//tempory
app.Use(async (context, next) =>
{
    await context.Response.WriteAsync("I'm short-circuiting the pipeline");

    var endpoint = context.GetEndpoint();
    if (endpoint != null)
    {
        await next.Invoke();
    }
});



app.Run();*/


/*app.Run(async context =>
{
    await context.Response.WriteAsync("I'm short-circuiting the pipeline");
    await next(context); // Add this line to allow the request to continue down the pipeline
});*/

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MoviesApi;
using MoviesApi.APIBehavior;
using MoviesApi.Controllers;
using MoviesApi.Filters;
using MySql.Data.MySqlClient;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json");

// Add services to the container.
builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(MyExceptionFilter));
    options.Filters.Add(typeof(ParseBadRequest));
}).ConfigureApiBehaviorOptions(BadRequestBehavior.parse);
var configuration = builder.Configuration;
builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("front_url");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});

/*builder.Services.AddTransient<MySqlConnection>(_ =>
    new MySqlConnection(
        builder.Configuration.GetConnectionString["Default"])
    );*/


builder.Services.AddDbContext<ApplicationDBContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddAutoMapper(typeof(Program));





/*string connectionString = configuration.GetConnectionString("DefaultConnection"); // Retrieve the connection string from appsettings.json or environment variables.

using MySqlConnection connection = new MySqlConnection(connectionString);

try
{
    connection.Open();
    Console.WriteLine("Connected to MySQL!");
    // Execute your MySQL queries here.
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}*/


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run(async (context) =>
{
    await context.Response.WriteAsync("I'm short-circuiting the pipeline");
});

app.Run();



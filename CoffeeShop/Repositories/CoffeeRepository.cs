using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using CoffeeShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Repositories
{
    public class CoffeeRepository : ICoffeeRepository
    {
        private readonly string _connectionString;
        public CoffeeRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        private SqlConnection Connection
        {
            get { return new SqlConnection(_connectionString); }
        }

        public List<Coffee> GetAll()
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();
                    using( var cmd = conn.CreateCommand())
                    {
                    cmd.CommandText = @"
                                            SELECT  c.Id, 
                                                    c.Title, 
                                                    c.BeanVarietyId, 
                                                    b.[Name], 
                                                    b.Notes, 
                                                    b.Region 
                                                FROM Coffee c
                                              LEFT JOIN BeanVariety b on b.Id = c.BeanVarietyId 
                                        ";
                    var reader = cmd.ExecuteReader();
                    var coffeeList = new List<Coffee>();

                    while (reader.Read())
                    {

                        var aCoffee = new Coffee()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            BeanVarietyId = reader.GetInt32(reader.GetOrdinal("BeanVarietyId")),
                            BeanVariety = new BeanVariety
                            {
                                Name = reader.GetString(reader.GetOrdinal("[Name]")),
                                Region = reader.GetString(reader.GetOrdinal("Notes")),
                            }
                        };
                            if (!reader.IsDBNull(reader.GetOrdinal("Notes")))
                        {
                            aCoffee.BeanVariety.Notes = reader.GetString(reader.GetOrdinal("Notes"));
                        }
                        coffeeList.Add(aCoffee);

                    };
                    return coffeeList;
                }
                    
            }
        }
    }
}
    

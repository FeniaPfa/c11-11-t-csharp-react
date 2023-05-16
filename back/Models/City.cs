﻿using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class City
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string Prefix { get; set; }

    public int CountryId { get; set; }

    public Country Country { get; set; }
}

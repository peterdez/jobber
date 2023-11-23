module.exports = mongoose => {
    const Job = mongoose.model(
      "job",
      mongoose.Schema(
        {
          title: String,
          description: String,
          role: String,
          company: String,
          salary: Number,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Job;
  };
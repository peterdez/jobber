module.exports = mongoose => {
    const Job = mongoose.model(
      "job",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Job;
  };